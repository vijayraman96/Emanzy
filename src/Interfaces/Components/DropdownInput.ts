export interface DropdownInterface {
    value?: string,
    onChange?: (value: any) => void,
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void,
    leftIcon?: JSX.Element,
    placeholder?: string;
    passwordIcon?: JSX.Element,
    error?: string,
    label?: string,
    labelStyle?: string,
    options: Choices[],
    selectName?: string,
    name?: string
}
export interface Choices {
     value: string;
     label: string;
     color?: string;
     isFixed?: boolean;
     isDisabled?: boolean;
}