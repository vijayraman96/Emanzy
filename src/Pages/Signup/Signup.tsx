import React, { FormEvent, useState, useEffect } from "react";
import axios, { Axios } from "axios";
import './Signup.scss';
import Images from "../../assets/images/images";
import Input from "../../Components/Input/Input";
import { inputType } from "../../Interfaces/Components/Input";
import { UilUser } from "@iconscout/react-unicons";
import { UilEyeSlash } from "@iconscout/react-unicons";
import { UilEye } from "@iconscout/react-unicons";
import { UilEnvelope } from "@iconscout/react-unicons";
import { UilLock } from "@iconscout/react-unicons";
import { UilCheck } from "@iconscout/react-unicons";
import { Button } from "../../Components/button/Button";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Action/Signup";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import { useNavigate } from "react-router-dom";
import { frontendAxiosUrl } from "../../axiosConfig";
import DropdownInput from "../../Components/Input/DropdownInput";
import Checkbox from "../../Components/Checkbox/Checkbox";
import { RootState } from "../../Reducers/RootReducers";
import { FormValues } from "../../Interfaces/Components/Signup";
import Routes from "../../Routes";

const Signup = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const userName = useSelector((state: RootState) => state.SignupReducer);
  const [formValues, setFormValues] = useState("");
  const [dropDownOptions, setDropDownOptions] = useState([
    { value: "", label: "Choose Role" },
    { value: "Admin", label: "Admin" },
    { value: "Manager", label: "Manager" },
    { value: "Supervisor", label: "Supervisor" },
    { value: "Submanager", label: "Submanager" },
    { value: "Worker", label: "Worker" },
  ]);

  useEffect(() => {
    let userDetails = localStorage.getItem('user');
   if(userDetails && Object.keys(userDetails as {}).length > 0) {
      navigate('/signin');
   } 

  }, []);
  return (
    <div className="max-w-[1200px] mx-auto items-center">
      <div className="flex items-center h-screen gap-20" >
        <div className="w-7/12">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            role: '',
            password: "",
            confirmPassword: "",
            termsOfService: false,
          }}
          onSubmit={async (
            values: FormValues,
            { setSubmitting }: FormikHelpers<FormValues>
          ) => {
            try {
              if (values.termsOfService) {
                let finalValues = {...values, role: values.role.value, email: values.email.toLowerCase() }
                const signupSuccess = await dispatch(fetchData(finalValues));
                if(signupSuccess?.email) {
                  localStorage.setItem("user", JSON.stringify(finalValues));
                  navigate('/signin');
                }
              } else {
                console.log("not submitted");
              }
            } catch (error) {
              console.log("error", error);
            }
          }}
          validationSchema={Yup.object().shape({
            firstName: Yup.string().required("First Name is required"),
            lastName: Yup.string().required("Last Name is required"),
            userName: Yup.string()
              .required("The User Name is required")
              .min(6)
              .max(40),
            email: Yup.string()
              .email("Email not valid")
              .matches(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|io|ie|org)$/,
                "Invalid email domain"
              )
              .min(10)
              .max(50, "Email address is too long")
              .required("Email is required"),
            role: Yup.object().required("Enter the Role"),
            password: Yup.string()
              .required("Password is required")
              .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
                "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long"
              )
              .max(40)
              .min(10),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref("password")], "Passwords must match")
              .required("Password is required")
              .max(40)
              .min(10),
            termsOfService: Yup.boolean().oneOf(
              [true],
              "Please accept the terms of service"
            ),
          })}
          method="post"
        >
          {(props: FormikProps<FormValues>) => {
            const {
              values,
              touched,
              errors,
              handleBlur,
              handleChange,
              isSubmitting,
              setFieldValue,
            } = props;

            return (
              <form onSubmit={props.handleSubmit}>
                <div className="grid grid-cols-2">
                <Input
                  value={props.values.firstName}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  label="First Name"
                  iconDirection="left"
                  leftIcon={<UilUser />}
                  password={false}
                  placeholder="Your first name"
                  type="text"
                  error={`${
                    (props.touched.firstName && props.errors.firstName) || ""
                  }`}
                  name={"firstName"}
                />
                <Input
                  value={props.values.lastName}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  label="Last Name"
                  iconDirection="left"
                  leftIcon={<UilUser />}
                  password={false}
                  placeholder="Your last name"
                  type="text"
                  error={`${
                    (props.touched.lastName && props.errors.lastName) || ""
                  }`}
                  name={`lastName`}
                />
                </div>
                <div className="grid grid-cols-2">
                <Input
                  value={props.values.userName}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  label="User Name"
                  iconDirection="left"
                  leftIcon={<UilUser />}
                  password={false}
                  placeholder="How we call you?"
                  type="text"
                  error={`${
                    (props.touched.userName && props.errors.userName) || ""
                  }`}
                  name={`userName`}
                />
                <Input
                  value={props.values.email}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  label="Email"
                  iconDirection="left"
                  leftIcon={
                    <UilEnvelope
                      style={{ width: "25px", height: "30px", marginTop: "2px" }}
                    />
                  }
                  password={false}
                  placeholder="Enter your email"
                  type="email"
                  error={`${(props.touched.email && props.errors.email) || ""}`}
                  name={`email`}
                />
                </div>
                <DropdownInput
                  value={props.values.role}
                  options={dropDownOptions}
                  placeholder="Please select the Role"
                  label="Role"
                  leftIcon={<UilUser />}
                  selectName="role"
                  name="role"
                />
                <Input
                  value={props.values.password}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  label="Password"
                  iconDirection="left"
                  rightIcon={<UilEyeSlash />}
                  passwordIcon={<UilEye />}
                  leftIcon={
                    <UilLock
                      style={{ width: "25px", height: "30px", marginTop: "2px" }}
                    />
                  }
                  password={true}
                  placeholder="Enter your password"
                  type="password"
                  error={`${
                    (props.touched.password && props.errors.password) || ""
                  }`}
                  name={`password`}
                />
                <Input
                  value={props.values.confirmPassword}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  label="Password"
                  iconDirection="left"
                  rightIcon={<UilEyeSlash />}
                  passwordIcon={<UilEye />}
                  leftIcon={
                    <UilLock
                      style={{ width: "25px", height: "30px", marginTop: "2px" }}
                    />
                  }
                  password={true}
                  placeholder="Confirm your password"
                  type="password"
                  error={`${
                    (props.touched.confirmPassword &&
                      props.errors.confirmPassword) ||
                    ""
                  }`}
                  name={`confirmPassword`}
                />
                <Checkbox
                  label="I Agree to the Terms of Service"
                  icon={
                    <UilCheck
                      style={{ width: "30px", height: "30px", marginTop: "2px" }}
                    />
                  }
                  compName="termsOfService"
                  checked={props.values.termsOfService}
                  error={`${
                    (props.touched.termsOfService &&
                      props.errors.termsOfService) ||
                    ""
                  }`}
                />

                <Button
                  text="Sign Up"
                  style={{ width: "98.8%" }}
                  type="submit"
                  disabled={!values.termsOfService || isSubmitting}
                />
                <p className="text-center">Already have an account? <span className="sign_in" onClick={() => navigate('/signin')}>Sign In</span></p>
              </form>
            );
          }}
        </Formik>
          
        </div>
          <div className="w-5/12">
            <div className="blue_box flex items-center">
              <img src={Images.signup_banner} alt="" />
            </div>
          </div>
      </div>
     
    </div>
  );
};

export default Signup;
