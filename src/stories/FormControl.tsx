import React, { Component } from "react";

interface FormControlProps {
  message: string;
}
 export const FormControl = ({
   message,
  ...props
}: FormControlProps) => {

    return (
      <div
        aria-live="polite"
        className='form-control'
      >
        <p>Form Control</p>
        <input type="text" id="test" name="test" />
        
        <p>{message}</p>
      </div>
    );
  
};

