import React, { forwardRef, useState } from "react";
import "./Button.scss";
import { ButtonInterface } from "../../Interfaces/Components/Button";

export const Button: React.FC<ButtonInterface> = ({
  text,
  icon,
  style,
  type,
  disabled
}) => {
  return (
    <button
      className="button flex justify-center items-center mx-2 mt-4 w-full"
      style={style}
      type={type}
    >
      <div className="icon_block flex justify-center items-center">{icon}</div>
      <p>{text}</p>
    </button>
  );
};
