import React, { FC, useEffect, useState } from "react";
import facebookSvg from "images/Facebook.svg";
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import { Link, useNavigate, useParams } from "react-router-dom";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import OtpInput from "react-otp-input";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ip } from "config/config";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  login,
  getCurrentAdmin,
  adminVerify,
  setContactNumber,
  resendOTP,
  setContactNumbers,
} from "../../store/auth/signin/actions";

// export interface PageLoginOtpProps {
//   className?: string;
// }

// type FormValues = {
//   otp: string;
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

const PageLoginOtp = ({ className = "" }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [err, setErr] = useState("");

  const dispatch = useDispatch();
  const history = useNavigate();

  // const { contactNumber } = useParams();
  const { currentAdmin, error, contactNumber } = useSelector(
    (state) => state.loginReducer
  );

  console.log("currentAdmin", currentAdmin);

  // console.log("contactNumber", contactNumber);

  const [otp, setOtp] = useState("");

  const handleChange = (value) => {
    setOtp(value);
  };

  useEffect(() => {
    dispatch(setContactNumbers(contactNumber));
  }, []);

  useEffect(() => {
    debugger;
    dispatch(getCurrentAdmin(currentAdmin));
  }, []);

  const resendOtp = () => {
    debugger;
    dispatch(resendOTP(contactNumber));
  };
  const onSubmit = () => {
    dispatch(adminVerify(contactNumber, otp, history));
  };

  console.log("currentAdmin", currentAdmin);

  // const onSubmit = handleSubmit(() => {
  //   axios
  //     .post(`${ip}/user-verifyOTP`, { contactNumber, otp })
  //     .then((res) => {
  //       console.log("res>>>", res);
        
  //       if (res?.status === 200) {
  //         navigate(`/`);
  //       }
  //       return res.data;
  //     })
  //     .catch((err) => {console.log("er>>", err);
      
  //       if (err?.response?.status !== 200) {
  //         navigate(`/login-otp/${contactNumber}`);
  //       }
  //       setErr(err?.response?.data?.otpverify);
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
          <form
            className="grid grid-cols-1 gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div
              className="modal-pin-form mb-4"
              style={{
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <OtpInput
                onChange={(value) => {
                  handleChange(value);
                }}
                inputStyle={{
                  width: "50px",
                  height: "50px",
                  margin: "0 0.75rem",
                  border: "1px solid gray",
                  borderRadius: "10px",
                }}
                value={otp}
                numInputs={4}
              />
            </div>
            <span style={{color:'red', display:"flex", justifyContent:"center", alignItems:"center"}}>{err}</span>
            {/* <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
                <Link to="/forgot-pass" className="text-sm">
                  Forgot password?
                </Link>
              </span>
              <Input type="password" className="mt-1" />
            </label> */}
            <ButtonPrimary type="submit">Continue</ButtonPrimary>
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

export default PageLoginOtp;
