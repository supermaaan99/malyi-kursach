import { State } from '@app/store/state';
import { Icon, Preloader } from '@core/components';
import { useWindowSize } from '@core/shared';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import * as tf from '@tensorflow/tfjs';
import classNames from 'classnames';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import i18next from 'i18next';
import { Prediction } from './models';
import { useObjectRecognitionData } from './object-recognition.hook';
import * as styles from './object-recognition.scss';
import { selectPrediction } from './store';
import { useTranslation } from 'react-i18next';
import { toggleToast } from '@ui/toast';
import { navigate } from '@router/store';

/**
 * Renders ObjectRecognition
 */
const ObjectRecognition: React.FC = () => {
  const {
    videoDevices,
    currentDeviceId,
    objects,
    controls,
    setCurrentDeviceId,
    getDevices
  } = useObjectRecognitionData();
  const [curentPredictions, setCurrentPredictions] = useState<Prediction[]>([]);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [isVideoReady, setIsVideoReady] = useState(false);
  const { height: windowHeight, width: windowWidth } = useWindowSize();
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const allowedScore = 0.6;

  /**
   * Mount
   */
  useEffect(() => {
    startup();
    tf.env().set('WEBGL_CPU_FORWARD', false);
    console.log(tf);
    /**
     * Cleanup video recording on unmount
     */
    return () => {
      const tracks = window?.stream?.getTracks();
      tracks?.forEach(track => {
        track.stop();
      });
    };
  }, []);

  /**
   * Startup video
   */
  const startup = () => {
    if (navigator?.mediaDevices?.getUserMedia) {
      const webCamPromise = navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: true
        })
        .then(stream => {
          window.stream = stream;
          videoRef.current.srcObject = stream;
          return new Promise((resolve, reject) => {
            videoRef.current.onloadedmetadata = () => {
              resolve();
            };
          });
        });

      // const mediaAccessStatusPromise = systemPreferences.getMediaAccessStatus(
      //   'camera'
      // );
      // const askPermissionsPromise = systemPreferences.askForMediaAccess(
      //   'camera'
      // );
      const modelPromise = cocoSsd.load();
      Promise.all([modelPromise, webCamPromise])
        .then(values => {
          setIsVideoReady(true);
          getDevices();
          detectFrame(videoRef.current, values[0]);
        })
        .catch(error => {
          if (error?.message === 'Could not start video source') {
            dispatch(
              toggleToast({
                status: 'fail',
                title: i18next.t('home.nav.objectRecognition'),
                description: i18next.t('objectRecognition.toast.webcamAbsent')
              })
            );
          } else {
            dispatch(
              toggleToast({
                status: 'fail',
                title: i18next.t('home.nav.objectRecognition'),
                description: error.message
              })
            );
          }

          dispatch(navigate('/'));
          console.error(error);
        });
    }
  };

  /**
   * Predictions renderer
   */
  const renderPredictions = (predictions: Prediction[]) => {
    const canvas = canvasRef?.current;
    canvas.width = windowWidth;
    canvas.height = windowHeight - 160;
    const ctx = canvas.getContext('2d');
    ctx.scale(0.5, 0.5);
    ctx?.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    predictions.forEach(prediction => {
      if (prediction.score > allowedScore) {
        const x = prediction.bbox[0];
        const y = prediction.bbox[1];
        const width = prediction.bbox[2];
        const height = prediction.bbox[3];
        let multiplierX = windowWidth / 324;
        let multiplierY = windowHeight / 238;

        // Draw the bounding box.
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 4;
        ctx.strokeRect(
          x * multiplierX,
          y * multiplierY - 300,
          width * multiplierX,
          height * multiplierY + 300
        );
      }
    });
  };

  /**
   * Detect a frame
   */
  const detectFrame = (video, model) => {
    let time = 1000;

    model.detect(video).then((predictions: Prediction[]) => {
      setTimeout(() => {
        renderPredictions(predictions);
        requestAnimationFrame(() => {
          detectFrame(video, model);
        });

        const predectionsByClass = predictions.map(
          prediction => prediction.class
        );

        const delayinSeconds = 5;

        setCurrentPredictions(prev => {
          /**
           * if prediction from 'predictions from ai' is inside 'current predictions'
           * set removeAt to new Date() + 5 secs
           * filter if current time > removeAt field
           */
          let result = Array.from(
            new Set([...prev, ...predictions] as Prediction[])
          )
            .map(prediction => {
              if (predectionsByClass.includes(prediction.class)) {
                const removeAt = new Date();
                removeAt.setSeconds(removeAt.getSeconds() + delayinSeconds);
                prediction.removeAt = removeAt;
              }
              return prediction;
            })
            .filter(
              prediction => prediction.removeAt.getTime() > new Date().getTime()
            )
            .sort();
          return result;
        });
      }, 500);
    });
  };

  /**
   * Before rendering predictions - filter for duplicates
   */
  const filteredPredictions = curentPredictions.reduce((acc, current) => {
    const x = acc.find(item => item.class == current.class);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  return (
    <React.Fragment>
      <Preloader isActive={!isVideoReady} />
      <div
        className={classNames(styles.objectRecognition, {
          [styles.objectRecognitionReady]: isVideoReady
        })}
      >
        <div className={styles.view} style={{ height: windowHeight - 160 }}>
          <div
            className={styles.recognition}
            style={{ width: windowWidth, height: windowHeight - 160 }}
          >
            <video className={styles.video} autoPlay muted ref={videoRef} />
            <canvas className={styles.canvas} ref={canvasRef} />
          </div>
          {curentPredictions && (
            <div className={styles.predictions}>
              {filteredPredictions
                ?.sort((a, b) => b.score - a.score)
                ?.map((prediction, index) => {
                  const { bbox, class: title, score } = prediction;
                  
                  return (
                    <div
                      className={styles.prediction}
                      key={index}
                    >
                      {title}
                    </div>
                  );
                })}
            </div>
          )}
        </div>
        {/* <div className={styles.controls}>
          <div className={styles.controlsContainer}>
            {controls.map(({ caption, icon, onClick }, index) => {
              const handler = {
                switch: () => {
                  stop();
                  handleFacemode();
                },
              }[onClick];
              return (
                <div className={styles.control} key={index} onClick={handler}>
                  <Icon
                    className={styles.controlIcon}
                    name={`obj-rec/${icon}`}
                  />
                  <div className={styles.controlCaption}>{t(caption)}</div>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </React.Fragment>
  );
};

export { ObjectRecognition };
