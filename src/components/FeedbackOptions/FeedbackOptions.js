import React from 'react';
import PropTypes from 'prop-types';
import styles from './feedbackOptions.module.css';

const FeedbackOptions = ({ clickHandler }) => {
  return (
    <>
      <button
        className={styles.button}
        type="button"
        name="good"
        onClick={clickHandler}>
        Good
      </button>
      <button
        className={styles.button}
        type="button"
        name="neutral"
        onClick={clickHandler}>
        Neutral
      </button>
      <button
        className={styles.button}
        type="button"
        name="bad"
        onClick={clickHandler}>
        Bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default FeedbackOptions;
