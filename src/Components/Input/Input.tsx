import React, { forwardRef, useState } from "react";
import { InputInterface } from "../../Interfaces/Components/Input";
import { IconComponent } from "@iconscout/react-unicons";
import "./input.scss";

const Input = forwardRef<HTMLInputElement, InputInterface>(
  (
    {
      value,
      placeholder,
      leftIcon,
      rightIcon,
      passwordIcon,
      iconDirection,
      onChange,
      error,
      type,
      className,
      label,
      labelStyle,
      inputStyle,
      password,
      iconStyle,
      onBlur,
      name
    },
    ref
  ) => {
    const [visible, setVisible] = useState(false);
    const [textType, setTextType] = useState(type);
    return (
      <div className="inputDiv my-3 mx-2">
        <label className={`labelElement font-semibold ${labelStyle}`}>
          {label}
        </label>
        <div className="inputElement">
          <div className={leftIcon !== undefined ? `leftIconDiv ${passwordIcon && 'password'}` : "disp_none"}>
            {/* <img src={icon} className="leftIcon" /> */}
           {leftIcon}
            
          </div>
          <input
            type={textType}
            placeholder={placeholder}
            className={`block border-2 w-full ${className} ${
              iconDirection === "left" ? "leftPadding" : "righPadding"
            } input_field`}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
          />
          {password ? (
            <div
              className={
                rightIcon !== undefined ? `rightIconDiv pwdColor` : "disp_none"
              }
            >
              {visible === false ? (
                <div onClick={() => {setVisible(true); setTextType('text')}}>{passwordIcon}</div>
              ) : (
                <div onClick={() => {setVisible(false); setTextType('password')}}>{rightIcon}</div>
              )}
            </div>
          ) : (
            <div
              className={rightIcon !== undefined ? `rightIconDiv ` : "disp_none"}
            >
              {rightIcon}
            </div>
          )}
        </div>
        <div className={error === "" ? "disp_none" : "errorDivVis"}>
          <p>{error}</p>
        </div>
      </div>
    );
  }
);

export default Input;
