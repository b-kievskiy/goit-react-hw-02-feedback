import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <>
      <p>
        Good: <span>{good}</span>
      </p>
      <p>
        Neutral: <span>{neutral}</span>
      </p>
      <p>
        Bad: <span>{bad}</span>
      </p>
      <p>
        Total: <span>{countTotalFeedback()}</span>
      </p>
      <p>
        Positive feedback: <span>{countPositiveFeedbackPercentage()}%</span>
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};

export default Statistics;
