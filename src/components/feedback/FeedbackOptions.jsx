import css from './feedback.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map(option => {
      return (
        <button
          className={css.btn}
          type="button"
          name={option}
          key={option}
          onClick={e => {
            e.preventDefault();
            const value = e.target.name;
            return onLeaveFeedback(value);
          }}
        >
          {option}
        </button>
      );
    });
  };

  FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
  };