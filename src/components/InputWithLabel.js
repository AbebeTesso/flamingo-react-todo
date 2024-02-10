import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function InputWithLabel({
  id,
  name,
  type = "text",
  value,
  children,
  onInputChange,
  placeholder,
  autoFocus,
}) {
  const inputRef = useRef();
  useEffect(() => {
    if (autoFocus) {
      inputRef.current.focus();
    }
  });
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        id={id}
        ref={inputRef}
        name={name}
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onInputChange}
      />
    </>
  );
}
InputWithLabel.propTypes = {
  id: PropTypes.string,
  inputRef: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  autoFocus: PropTypes.any,
  onInputChange: PropTypes.func,
};

export default InputWithLabel;
