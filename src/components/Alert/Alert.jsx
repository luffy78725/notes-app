import { useRef, useEffect } from "react";
import PropTypes from "proptypes";

const DEFAULT_DELAY = 5000;

export default function Alert({ handleClose, show, message, delay }) {
  let timerRef = useRef(null);

  //Close Alert after a given delay
  useEffect(() => {
    if (show) {
      timerRef.current = setTimeout(() => {
        handleClose();
      }, delay || DEFAULT_DELAY);
    }
  }, [show, handleClose, delay]);

  function closeAlert() {
    clearTimeout(timerRef.current);
    handleClose();
  }

  return (
    <div
      className="alert alert-danger mt-3 justify-content-between"
      style={{ display: show ? "flex" : "none" }}
      role="alert"
    >
      {message}
      <button
        onClick={closeAlert}
        type="button"
        className="btn-close alert-button"
        aria-label="Close"
      ></button>
    </div>
  );
}

Alert.defaultProps = {
  delay: DEFAULT_DELAY,
  show: false,
  handleClose: () => {},
};

Alert.propTypes = {
  /** Auto hides the Alert after delay (in milliseconds)*/
  delay: PropTypes.number,

  /** Show and Hide Alert*/
  show: PropTypes.bool,

  /** message to show on Alert body */
  message: PropTypes.string,

  /** Callback to run on Clicking close button */
  handleClose: PropTypes.func,
};
