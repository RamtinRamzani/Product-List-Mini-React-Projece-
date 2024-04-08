import React, { Fragment, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Styles from './addCart.module.css';
import * as yup from 'yup';

const AddCart = () => {
  const [desc, setDesc] = useState('');
  const [score, setScore] = useState('');
  const onSubmit = (values) => {
    // values.preventDefault();
    console.log('Form Submit!!!', values);
  };

  const validation = yup.object().shape({
    desc: yup.string().required('Please Complete!!!'),
    score: yup.string().required('Please Complete!!!'),
    price: yup.string().required('Please Complete!!!'),
    off: yup.string().required('Please Complete!!!'),
  });

  return (
    <Fragment>
      <div className={Styles.addCart}>
        <div className={Styles.form}>
          <div className={Styles.left}>
            <h2 className={Styles.header}>Add Card</h2>

            <Formik
              initialValues={{
                desc: '',
                score: '',
                price: '',
                off: '',
              }}
              onSubmit={(values) => onSubmit(values)}
              validationSchema={validation}
            >
              <Form>
                <label htmlFor="a1" className={Styles.label}>
                  Description
                </label>
                <Field
                  id="a1"
                  className={Styles.input}
                  name="desc"
                  placeholder="description..."
                />
                <ErrorMessage
                  name="desc"
                  component={'span'}
                  className={`${Styles.error} ${Styles.one}`}
                />
                <label htmlFor="a2" className={Styles.label}>
                  Score
                </label>

                <Field
                  id="a2"
                  className={Styles.input}
                  name="score"
                  placeholder="score..."
                />
                <ErrorMessage
                  name="score"
                  component={'span'}
                  className={`${Styles.error} ${Styles.two}`}
                />

                <label htmlFor="a3" className={Styles.label}>
                  Price
                </label>

                <Field
                  id="a3"
                  className={Styles.input}
                  name="price"
                  placeholder="price..."
                />
                <ErrorMessage
                  name="price"
                  component={'span'}
                  className={`${Styles.error} ${Styles.three}`}
                />

                <label htmlFor="a4" className={Styles.label}>
                  Off
                </label>

                <Field
                  id="a4"
                  className={Styles.input}
                  name="off"
                  placeholder="off..."
                />
                <ErrorMessage
                  name="off"
                  component={'span'}
                  className={`${Styles.error} ${Styles.four}`}
                />

                <button className={Styles.submit} type="submit">
                  Submit
                </button>
              </Form>
            </Formik>
          </div>
          {/* <div className={Styles.right}></div> */}
        </div>
      </div>
    </Fragment>
  );
};

export { AddCart };
