import React from "react";

const FormInput = ({ onchange, ...otherAttributes }) => {
  return (
    <input
      {...otherAttributes}
      onChange={onchange}
      required
    />
  );
};

export default FormInput;
