import React, { useEffect } from 'react'
import { Button } from '../../Components/button/Button';
import Input from '../../Components/Input/Input';
import { UilUser, UilEnvelope, UilEyeSlash, UilEye, UilLock, UilCheck } from '@iconscout/react-unicons';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import Checkbox from '../../Components/Checkbox/Checkbox';
import DropdownInput from '../../Components/Input/DropdownInput';
import Images from '../../assets/images/images';
import { frontendAxiosUrl } from '../../axiosConfig';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import './Signin.scss'
import { SignInAction } from '../../Action/Signin';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { SigninValues } from '../../Interfaces/Components/Signin';
import Routes from '../../Routes';

const Signin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();
    const signUpNavigation = () => {
      let user = localStorage.getItem('user');
      console.log('user', user);
      
      if( !user || Object.keys(user as {}).length === 0) {
        navigate('/signup');
      } else {
        toast.error("You have already Signed Up your account. So please login");
      }
    }


    useEffect(() => {
      console.log("vijay");
      const tokenValidation = async() =>{
        try {
          const response: any = await frontendAxiosUrl.get('/authenticated');
          console.log('response', response);
          let tokenMatch = localStorage.getItem('token');
          if(tokenMatch === response?.token) {
            navigate('/dashboard');
          } else {
            navigate('/signin');
          }
         
        } catch (error) {
          navigate('/signin');
        }
      }
      tokenValidation();
    }, [Routes])
    return (
        <div className="max-w-[1200px] mx-auto items-center">
          <div className="flex items-center h-screen gap-20" >
            <div className="w-6/12">
            <Formik
              initialValues={{
                email: "",
                password: "",
                storeCred: false
              }}
              onSubmit={async (
                values: SigninValues,
                { setSubmitting }: FormikHelpers<SigninValues>
              ) => {
                console.log("values", values);
                try {
                  if (values) {
                   const signinCompleteProcess = await dispatch(SignInAction(values));

                   console.log('signinCompleteProcess', signinCompleteProcess);
                   if(signinCompleteProcess?.token) {
                      navigate('/dashboard');
                      localStorage.setItem('token', signinCompleteProcess?.token);
                   }
                    // let finalValues = {...values, role: values.role.value }
                    // console.log("process", process.env.REACT_APP_FRONT_BACK_URL);
                    // const data = await frontendAxiosUrl.get("/date");
                    // console.log("ssdcd", JSON.stringify(data));
                    // // dispatch(fetchData(finalValues));
                    // localStorage.setItem("myCat", JSON.stringify(finalValues));
                    // navigate('/signin');
                  } else {
                    console.log("not submitted");
                  }
                } catch (error) {
                  console.log("error", error);
                }
                setTimeout(() => {
                  // alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 500);
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email("Email not valid")
                  .matches(
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|io|ie|org)$/,
                    "Invalid email domain"
                  )
                  .min(10)
                  .max(50, "Email address is too long")
                  .required("Email is required"),
                password: Yup.string()
                  .required("Password is required")
                  .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
                    "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long"
                  )
                  .max(40)
                  .min(10),
                  storeCred: Yup.boolean()
              })}
              method="post"
            >
              {(props: FormikProps<SigninValues>) => {
                const {
                  touched,
                  errors,
                  handleBlur,
                  handleChange,
                  isSubmitting,
                  setFieldValue,
                } = props;
    
                return (
                  <form onSubmit={props.handleSubmit}>
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
                      rightText="Forget Password"
                      link="forgot-password"
                    />
                    <Checkbox
                  label="Remember Me"
                  icon={
                    <UilCheck
                      style={{ width: "30px", height: "30px", marginTop: "2px" }}
                    />
                  }
                  compName="storeCred"
                  checked={props.values.storeCred}
                  error=""
                />
    
                    <Button
                      text="Sign In"
                      style={{ width: "98.8%" }}
                      type="submit"
                      disabled={isSubmitting}
                    />
                    <p className="text-center">Don't have an account? <span className="sign_in" onClick={signUpNavigation}>Sign Up</span></p>
                  </form>
                );
              }}
            </Formik>
              
            </div>
              <div className="w-6/12">
                <div className="blue_box flex items-center">
                  <img src={Images.signup_banner} alt="" />
                </div>
              </div>
          </div>
         
        </div>
      );
}

export default Signin
