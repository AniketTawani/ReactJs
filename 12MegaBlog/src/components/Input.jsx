// in this component we are using forward reference
// for ex: you have separate input component and u hae to use that component inside login page, then you isnide the login page you should have the reference of that input component
import React from "react";
import { useId } from "react";
const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div>
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
        id={id}
      ></input>
    </div>
  );
});

export default Input;
