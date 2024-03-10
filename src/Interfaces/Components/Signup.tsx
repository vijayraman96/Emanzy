
interface FormValues {
    firstName: string,
    lastName: string,
    userName: string,
    email: string;
    role: any;
    password: string;
    confirmPassword: string;
    termsOfService: boolean;
}
interface MyFormProps {
    initialFName?: string;
    initialLName?: string;
    initialEmail?: string;
    initialPassword?: string;
    initialConfirmPassword?: string;
}
interface OtherProps {
    title?: string;
}