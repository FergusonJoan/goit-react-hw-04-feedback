import React from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.scss';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={style.list}>
      {options.map(grade => (
        <button
          key={grade}
          type="button"
          className={style.button}
          onClick={() => onLeaveFeedback(grade)}
        >
          {grade}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
}.isRequired;
