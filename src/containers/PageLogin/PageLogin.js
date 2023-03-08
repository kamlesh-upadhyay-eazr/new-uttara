import React, { FC, useEffect, useState } from "react";
import facebookSvg from "images/Facebook.svg";
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import { useForm, Resolver } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import OtpInput from "react-otp-input";
import axios from "axios";
import { ip } from "config/config";
import { useDispatch } from "react-redux";
import {
  login,
  getCurrentAdmin,
  setContactNumbers,
  tclogin,
  setErrorMessage,
  operatorlogin,
  userLogin,
} from "store/auth/signin/actions";

// export interface PageLoginProps {
//   className?: string;
// }

// type FormValues = {
//   contactNumber: string;
// };

// const resolver: Resolver<FormValues> = async (values) => {
//   return {

//     values: values.otp ? values : {},
//     errors: !values.otp
//       ? {
//           phone: {
//             type: 'required',
//             message: 'This is required.',
//           }
//         }
//       : {},
//   };
// };

const loginSocials = [
  {
    name: "Continue with Facebook",
    href: "#",
    icon: facebookSvg,
  },
  {
    name: "Continue with Twitter",
    href: "#",
    icon: twitterSvg,
  },
  {
    name: "Continue with Google",
    href: "#",
    icon: googleSvg,
  },
];

const PageLogin = ({ className = "" }) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const [contactNumber, setContactNumber] = useState("");

  // const handleChange = (value) => {
  //   setPhoneNumber(value);
  // };

  
  const dispatch = useDispatch();
  const history = useNavigate();
  const role = ["admin", "user", "tc", "organiser"];
  
  const [err, setErr] = useState("");

  const onSubmit = (data) => {
    debugger;
    axios
      .get(`${ip}/user/${data.contactNumber}`)
      .then((data) => {
        console.log("data", data);
        debugger;
        // switch (role[0].admin === "admin") {
          // case "admin":
            dispatch(login(data?.data[0]?.contactNumber,history));
            dispatch(setContactNumbers(data?.data[0]?.contactNumber));
            // if()
            // history(`/login-otp/${contactNumber}`);
            // break;
        // }
        
      })
      .catch((err) => setErr(err.response.data.message));
  };

  // const onSubmit = handleSubmit((data) => console.log("data",data));
  // const onSubmit = handleSubmit((data) => {
  //   const contactNumber = getValues("contactNumber");
  //   axios
  //     .post(`${ip}/admin-sendOTP`, { contactNumber })
  //     .then((res) => {
  //       if (res.data.message === "success") {
  //         navigate(`/login-otp/${contactNumber}`);
  //       }
  //       return res.data;
  //     })
  //     .catch((err) => {
  //       console.log("err", err);
  //       if(err.message !== "success"){
  //         navigate(`/login`)
  //       }
  //       setErr(err.response.data.message);
  //       return err.message;
  //     });
  // });

  return (
    <div className={`nc-PageLogin ${className}`} data-nc-id="PageLogin">
      <Helmet>
        <title>Login || Booking React Template</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Login
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          {/* <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              >
                <img
                  className="flex-shrink-0"
                  src={item.icon}
                  alt={item.name}
                />
                <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                  {item.name}
                </h3>
              </a>
            ))}
          </div> */}
          {/* OR */}
          {/* <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div> */}
          {/* FORM */}
          {/* <form className="grid grid-cols-1 gap-6" action="#" method="post"> */}
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit(onSubmit)}>
            <label className="block">
              {/* <span style={{display:"flex", justifyContent:"center", alignItems:"center"}} className="text-neutral-800 dark:text-neutral-200">
                OTP
              </span> */}

              <input
                {...register("contactNumber")}
                type="text"
                placeholder="+91"
                className="mt-1"
              />
              {/* {errors?.contactNumber && <p>{errors.contactNumber.message}</p>} */}
              <span style={{color:"red"}}>{err}</span>
            </label>
            {/* <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
                <Link to="/forgot-pass" className="text-sm">
                  Forgot password?
                </Link>
              </span>
              <Input type="password" className="mt-1" />
            </label> */}
            {/* <Link style={{display:"flex", justifyContent:"center", alignItems:"center"}} 
              to="/login-otp"> */}
            <ButtonPrimary type="submit">Continue</ButtonPrimary>
            {/* </Link> */}
          </form>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            New user? {` `}
            <Link to="/signup">Create an account</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageLogin;
