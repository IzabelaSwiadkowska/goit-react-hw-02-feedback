import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ message }) => {
  return message && <p className={styles.paragraph}>{message}</p>;
};
Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
