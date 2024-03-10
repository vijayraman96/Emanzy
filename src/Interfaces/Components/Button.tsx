import { FormikHelpers } from "formik";

export interface ButtonInterface {
    text: string,
    icon?: JSX.Element,
    style?: React.CSSProperties,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    disabled?: any,
}