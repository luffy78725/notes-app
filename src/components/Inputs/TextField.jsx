import React from "react";
import { classNames } from "../../utils";
import PropTypes from "proptypes";

const DEFAULT_TYPE = "text";

export default function TextField({ label, error, type, ...rest }) {
  return (
    <div className="mt-3">
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      {type === DEFAULT_TYPE ? (
        <input
          type="text"
          className={classNames("form-control", error && "custom-error")}
          style={{ width: "100%" }}
          {...rest}
        />
      ) : (
        <textarea
          type={type}
          className={classNames("form-control", error && "custom-error")}
          style={{ width: "100%" }}
          {...rest}
        />
      )}
      <div className="error-helper-text">{error}</div>
    </div>
  );
}

TextField.defaultProps = {
  rows: 3,
  type: DEFAULT_TYPE,
};

TextField.propTypes = {
  /** Type of the input field*/
  type: PropTypes.oneOf(["text", "multiline"]),

  /** Label to display with textField*/
  label: PropTypes.string,

  /** Name to identify TextField*/
  name: PropTypes.string,

  /** Plachoder to display*/
  placeholder: PropTypes.string,

  /** Callback function for onchange event*/
  onchange: PropTypes.func,

  /** input value*/
  value: PropTypes.string,

  /** No. of rows to display*/
  rows: PropTypes.number,

  /** Controls error display*/
  error: PropTypes.string,

  /** unique id for the underlying html element*/
  id: PropTypes.string,
};
