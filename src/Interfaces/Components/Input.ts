import React, { FunctionComponent } from 'react';
export interface InputInterface {
    value: string,
    placeholder?: string,
    leftIcon?: JSX.Element,
    rightIcon?: JSX.Element,
    passwordIcon?: JSX.Element,
    iconDirection?: string,
    ref?: string | any,
    onChange: (value: any) => void,
    error?: string,
    type: string,
    className?: string,
    label?: string,
    labelStyle?: string,
    inputStyle?: string,
    password?: Boolean,
    iconStyle?: string,
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void,
    name?: string,
    selectName?: string,
    rightText?: string,
    link?: string
}

export enum inputType {
    text = "text",
    password = "password",
    numeric = "numeric",
    alphaNumerc = "alphanumeric"
}
