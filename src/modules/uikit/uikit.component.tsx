import * as React from 'react';
import * as styles from './uikit.scss';
import {
  H1,
  Text,
  Button,
  H2,
  H3,
  H4,
  H5,
  H6,
  Icon,
  Checkbox,
  Preloader,
  Breadcrumbs,
  Form,
  Field,
  Modal,
  Toast,
  Select
} from '@core/components';
import { useState } from 'react';
import { Formik } from 'formik';
import { uikitValidationSchema, UikitFormValues } from './models';
import { Modals, Preloaders } from '@ui/models';
import { showModal } from '@ui/modal';
import { useDispatch } from 'react-redux';
import { preloaderStart, preloaderStop } from '@ui/preloader';
import { toggleToast } from '@ui/toast';

/**
 * Renders Uikit
 */
const Uikit: React.FC = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [formValues, setFromValues] = useState({
    email: '',
    password: '',
    accept: false
  } as UikitFormValues);

  return (
    <div className={styles.uikit}>
      <H1 className={styles.caption}>Uikit Components</H1>

      {/* Typography */}
      <div className={styles.section}>
        <H1>Typography</H1>
        <H1>Header 1 text</H1>
        <H2>Header 2 text</H2>
        <H3>Header 3 text</H3>
        <H4>Header 4 text</H4>
        <H5>Header 5 text</H5>
        <H6>Header 6 text</H6>
      </div>

      {/* Icon */}
      <div className={styles.section}>
        <H1>Icon</H1>
        <Icon className={styles.icon} name='check-sm' />
      </div>

      {/* Text-fields */}
      <div className={styles.section}>
        <H1>Text Field variations</H1>
        <div className={styles.textFields}>
          <Text value={inputValue} onChange={() => setInputValue(inputValue)} />
          <Text
            label='Input label'
            value={inputValue}
            onChange={() => setInputValue(inputValue)}
          />
          <Text
            label='Input label'
            placeholder='Placeholder'
            value={inputValue}
            onChange={() => setInputValue(inputValue)}
          />
        </div>
      </div>

      {/* Select */}
      <div className={styles.section}>
        <H1>Select</H1>
        <Select
          value={null}
          options={[{ label: 'Label 1', value: 'Value 1' }]}
        />
      </div>

      {/* Buttons */}
      <div className={styles.section}>
        <H1>Buttons</H1>
        <div className={styles.buttons}>
          <Button>T:1 S:md</Button>
          <Button theme='secondary'>T:2 S:md</Button>
          <Button size='sm'>T:1 S:sm</Button>
          <Button theme='secondary' size='sm'>
            T:2 S:sm
          </Button>
        </div>
      </div>

      {/* Checkbox */}
      <div className={styles.section}>
        <H1>Checkbox</H1>
        <Checkbox
          value={checked}
          onChange={() => setChecked(!checked)}
          label='Check me'
        />
      </div>

      {/* Preloader */}
      <div className={styles.section}>
        <H1>Preloader</H1>
        <div className={styles.preloaderControls}>
          <Button onClick={() => dispatch(preloaderStart(Preloaders.uikit))}>
            Start Preloader
          </Button>
          <Button onClick={() => dispatch(preloaderStop(Preloaders.uikit))}>
            Stop Preloader
          </Button>
        </div>

        <Preloader id={Preloaders.uikit} />
      </div>

      {/* Breadcrumbs */}
      <div className={styles.section}>
        <H1>Breadcrumbs</H1>
        <Breadcrumbs links={[{ label: 'Home', to: '/' }]}>Uikit</Breadcrumbs>
      </div>

      {/* Modal */}
      <div className={styles.section}>
        <H1>Modal</H1>
        <Button onClick={() => dispatch(showModal(Modals.uikit))}>
          Open Modal
        </Button>
        <Modal id={Modals.uikit}>This is a modal window</Modal>
      </div>

      {/* Toast */}
      <div className={styles.section}>
        <H1>Toast</H1>
        <Button
          onClick={() =>
            dispatch(
              toggleToast({
                status: 'success',
                title: 'Uikit Toast',
                description: 'Toast description'
              })
            )
          }
        >
          Trigger Toast
        </Button>
      </div>

      {/* Form */}
      <div className={styles.section}>
        <H1>Formik Form</H1>
        <Formik
          initialValues={formValues}
          validationSchema={uikitValidationSchema}
          onSubmit={values => setFromValues(values)}
        >
          {({ handleSubmit, values }) => (
            <div className={styles.formContainer}>
              <Form className={styles.form}>
                <Field.Text
                  name='email'
                  label='Email'
                  placeholder='mail@mail.com'
                />
                <Field.Text
                  name='password'
                  type='password'
                  label='Password'
                  placeholder='Password'
                />
                <Field.Checkbox name='check' label='check' />
                <Button onClick={() => handleSubmit()}>Submit</Button>
              </Form>
              <div className={styles.values}>
                <div>Email: {values.email}</div>
                <div>Password: {values.password}</div>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export { Uikit };
