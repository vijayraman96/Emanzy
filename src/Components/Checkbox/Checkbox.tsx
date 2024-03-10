import React, { useState } from "react";
import "./Checkbox.scss"; // Import your custom CSS for styling
import { useFormikContext } from "formik";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  compName?: string;
  onChange?: (value: any) => void;
  error?: string;
  checked?: any;
}
const Checkbox: React.FC<CheckboxProps> = ({
  label,
  icon,
  onChange,
  compName,
  error,
  checked,
}) => {
  const { setFieldValue } = useFormikContext();
  const [boxCheck, setBoxCheck] = useState(false);

  // const toggleCheckbox = () => {
  //   setChecked(!checked);
  // };

  return (
    <div className="checkContainer">
      <label className="checkbox-container">
        <p className="label">{label}</p>
        <input
          type="checkbox"
          onChange={(e) => setFieldValue(compName || "", e.target.checked)}
          name={compName}
          checked={checked}
        />
        <span className="checkmark">{checked ? icon : null}</span>
       
      </label>
      {!checked && (
          <div className="errorDivVis">
            <p>{error}</p>
          </div>
        )}
    </div>
  );
};

export default Checkbox;
