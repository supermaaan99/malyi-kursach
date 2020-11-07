import { State } from '@app/store/state';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const useObjectRecognitionData = () => {
  const { objects } = useSelector((state: State) => state.objectRecognition);
  const [videoDevices, setVideoDevices] = useState(null);
  const [currentDeviceId, setCurrentDeviceId] = useState(null);

  /**
   * Get available video devices
   */
  const getDevices = () => {
    navigator.mediaDevices.enumerateDevices().then(devices => {
      const videoDevices = devices.filter(
        device => device.kind == 'videoinput'
      );
      setVideoDevices(videoDevices);
      setCurrentDeviceId(videoDevices[0]?.deviceId);
    });
  };

  const controls = [
    {
      caption: 'objectRecognition.controls.screenshot',
      icon: 'screenshot',
      onClick: 'takeScreenshot'
    },
    { caption: 'objectRecognition.controls.photo', icon: 'photo', onClick: '' },
    { caption: 'objectRecognition.controls.video', icon: 'video', onClick: '' },
    {
      caption: 'objectRecognition.controls.switch',
      icon: 'switch',
      onClick: 'switch'
    },
    {
      caption: 'objectRecognition.controls.gallery',
      icon: 'gallery',
      onClick: 'gallery'
    }
  ];

  return {
    controls,
    objects,
    videoDevices,
    setCurrentDeviceId,
    currentDeviceId,
    getDevices
  };
};

export { useObjectRecognitionData };
