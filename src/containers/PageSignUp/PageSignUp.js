import React, { FC, useEffect, useState } from "react";
import facebookSvg from "images/Facebook.svg";
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { Link } from "react-router-dom";
import FormItem from "containers/PageAddListing1/FormItem";
// import Select from "shared/Select/Select";
import { useForm, Resolver } from "react-hook-form";
import { TextField, Select } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAdminById, registerAdminSuccess } from "store/auth/register/actions";
import axios from "axios";
import { ip } from "config/config";
// import { registerAdminSuccess } from "../../../store/auth/register/actions";

// enum GenderEnum {
//   female = "female",
//   male = "male",
//   other = "other",
// }

// type FormValues = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   gender: GenderEnum;
//   contactNumber: string;
// };

const resolver = async (values) => {
  return {
    values: values.contactNumber && values.email ? values : {},
    errors: !values.contactNumber && values.email
      ? {
          contactNumber: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

// export interface PageSignUpProps {
//   className?: string;
// }

// const loginSocials = [
//   {
//     name: "Continue with Facebook",
//     href: "#",
//     icon: facebookSvg,
//   },
//   {
//     name: "Continue with Twitter",
//     href: "#",
//     icon: twitterSvg,
//   },
//   {
//     name: "Continue with Google",
//     href: "#",
//     icon: googleSvg,
//   },
// ];

const PageSignUp = ({ className = "" }) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({ resolver });

  const dispatch = useDispatch();
  const history = useNavigate();

  const [error, setError] = useState("Not Valid");
  const onSubmit = (data) => {
    dispatch(registerAdminSuccess(data, history));
  };

  // const onSubmit = handleSubmit((data) => {
  //   console.log(data);

  //   //  const contactNumber = getValues("contactNumber");
  //   axios
  //     .post(`${ip}/register-user`, data)
  //     .then((res) => {
  //       console.log("res", res);
        
  //       if(res.data.status === 201){
  //         navigate("/login");
  //       }
  //       return res.data;
  //     })
  //     .catch((err) => {

  //       console.log("err", err);
        
  //       if(err.response.data.status !== 201){
  //         navigate("/signup");
  //       }
  //       setError(err?.response?.data?.message);
  //       return err.message;
  //     });
  // });
  // useEffect(() => {
  //   dispatch(getAdminById());
  // },[]);

  console.log("errors", errors);

  return (
    <div className={`nc-PageSignUp  ${className}`} data-nc-id="PageSignUp">
      <Helmet>
        <title>Sign up || Booking React Template</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Signup
        </h2>
        <div className="max-w-md mx-auto space-y-6 ">
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
              <span className="text-neutral-800 dark:text-neutral-200">
                First Name
              </span>
              <input
                {...register("firstName")}
                type="text"
                placeholder="First Name"
                className="mt-1"
              />
              {errors?.firstName && <p>{errors.firstName.message}</p>}
            </label>

            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Last Name
              </span>
              <input
                {...register("lastName")}
                type="text"
                placeholder="Last Name"
                className="mt-1"
              />
              {errors?.lastName && <p>{errors.lastName.message}</p>}
            </label>

            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email address
              </span>
              <input
                {...register("email")}
                type="email"
                placeholder="example@example.com"
                className="mt-1"
              />
              {errors?.email && <p>{errors.email.message}</p>}
            </label>

            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                contactNumber
              </span>
              <input
                {...register("contactNumber")}
                type="text"
                placeholder="contactNumber"
                className="mt-1"
              />
              {errors?.contactNumber && <p>{errors.contactNumber.message}</p>}
            </label>
            {/* <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
              </span>
              <input type="password" className="mt-1" />
            </label> */}

            {/* <FormItem */}
            <label className="block">
              {/* desc="Entire place: Guests have the whole place to themselves—there's a private entrance and no shared spaces. A bedroom, bathroom, and kitchen are usually included." */}
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Gender
              </span>
              <select {...register("gender")}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>

            {/* <span style={{color:"red"}}>{error || ""}</span> */}
            {/* </FormItem> */}
            <ButtonPrimary type="submit">Continue</ButtonPrimary>
          </form>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Already have an account? {` `}
            <Link to="/login">Sign in</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageSignUp;
