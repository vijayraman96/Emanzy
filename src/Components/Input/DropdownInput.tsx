import React, { forwardRef, useState } from "react";
import { InputInterface } from "../../Interfaces/Components/Input";
import Select from 'react-select';
import "./input.scss";
import { Choices, DropdownInterface } from "../../Interfaces/Components/DropdownInput";
import { Formik, useField, useFormikContext,ErrorMessage } from 'formik';

const DropdownInput = forwardRef<HTMLInputElement, DropdownInterface>(
  (
    {
      value,
      onChange,
      onBlur,
      leftIcon,
      placeholder,
      passwordIcon,
      error,
      label,
      labelStyle,
      options, 
      selectName,
      name
    },
    ref
  ) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta, helpers] = useField(`${selectName}`);
    const [isClearable, setIsClearable] = useState<boolean>(true);
    const [isSearchable, setIsSearchable] = useState<boolean>(true);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<Choices[]>(options);


    const handleChange = (selectedOption: any) => {
        if(selectName) {
            setFieldValue(selectName, selectedOption);
        }
      };
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
          <Select
          {...field}
            onBlur={() => helpers.setTouched(true)}
            onChange={(option) => {
              setFieldValue(selectName || "" , option); // Update the form field value in Formik
              helpers.setValue(option); // Update the value of the Select component
            }}
            getOptionValue={(option) => option.value}
            placeholder={placeholder}
            className="basic_single"
            classNamePrefix="select"
            defaultValue={data[0]}
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isSearchable={isSearchable}
            name={name}
            options={data}
        />
        </div>
        {meta.touched && meta.error && (
        <div className={error === "" ? "disp_none" : "errorDivVis"}>
          <p><ErrorMessage name={selectName || ''} ></ErrorMessage></p>
        </div>
        )}
      </div>
    );
  }
);

export default DropdownInput;
