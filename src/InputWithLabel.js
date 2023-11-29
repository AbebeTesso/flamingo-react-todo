import React, { useEffect, useRef } from "react";

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
      <label htmlFor></label> 
      <input
        ref={inputRef}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onInputChange}
      />
    </>
  );
}

export default InputWithLabel;