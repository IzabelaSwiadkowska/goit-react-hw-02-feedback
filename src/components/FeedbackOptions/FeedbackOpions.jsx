import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const stateArr = Object.keys(options);
  return (
    <div className={styles.container}>
      {stateArr.map((el, idx) => (
        <button
          key={idx}
          type="button"
          name={el}
          onClick={onLeaveFeedback}
          className={styles.button}
        >
          {el}
        </button>
      ))}
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
