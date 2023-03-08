import React, { FC, useEffect, useState } from "react";
import facebookSvg from "images/Facebook.svg";
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { Link, useParams } from "react-router-dom";
import FormItem from "containers/PageAddListing1/FormItem";
// import Select from "shared/Select/Select";
import { useForm, Resolver } from "react-hook-form";
import { TextField, Select } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAdminById } from "store/auth/register/actions";
import axios from "axios";
import { ip } from "config/config";
import { useSelector } from "react-redux";

// enum GenderEnum {
//   female = "female",
//   male = "male",
//   other = "other",
// }

// type FormValues = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   email: string;
//   password: string;
//   gender: GenderEnum;
//   contactNumber: string;
// };

const resolver = async (values) => {
  return {
    values: values.contactNumber ? values : {},
    errors: !values.contactNumber
      ? {
          contactNumber: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};



// export interface ParticipantFormProps {
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

const ParticipantForm= ({ className = "" }) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({ resolver });

  const dispatch = useDispatch();
  const history = useNavigate();
  const { id } = useParams();
  

  const [transactionData, setTransactionData] = useState(null);
  const [formNumber, setFormNumber] = useState(1);
  const [attendeeDetails, setAttendeeDetails] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);


  const getDetails = (data) => {
    setAttendeeDetails(data);
  };

  const forms = [];
  const addForm = () => {
    forms.push(formNumber);
  };

  const { amount, totalGuest } = useSelector((state) => state.GuestInputs);
  const { admin, currentAdmin } = useSelector((state) => state.loginReducer);
  console.log("token", admin);
  console.log("currentAdmin", currentAdmin);

  const initPayment = (data) => {
    debugger;
    console.log("dataaaa", data);
    const options = {
      key: "rzp_test_yGPBt7cSBGmL3K",
      amount: data.amount,
      currency: data.currency,
      description: "Transactions",
      order_id: data.id,
      modal: {
        ondismiss: function () {
          window.location.replace("/");
        },
      },
      handler: async (response) => {
        try {
          const verifyUrl = `${ip}/tc-verify`;
          const { data } = await axios.post(verifyUrl, response, {
            headers: {
              Authorization: `Bearer ${admin.accessToken}`,
            },
          });
          if (data.message === "Payment verified successfully") {
            history(`/pay-done`);
          } else {
            history(`/`);
          }
        } catch (error) {
          alert(error);
          history(`/`);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open(rzp1);
  };

  const handlePayment = () => {
    debugger;
    const orderUrl = `${ip}/tc-orders`;
    const token = admin.accessToken; 
    axios
      .post(
        orderUrl,
        { amount },{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      .then((res) => {
        console.log("res", res);
        setTransactionData(res.data);
        initPayment(res.data);
      });
  };


  const [error, setError] = useState("Not Valid");

  // console.log("admin", admin._id);
  

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    const token = admin.accessToken;
    //  const contactNumber = getValues("contactNumber");
    axios.post(`${ip}/add-admin-participants/${id}`, data,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
          debugger;
          console.log("res", res);

          if (res.data.status === 201) {
            history("/pay-done");
          }
          return res.data;
        })
        .catch((err) => {
          console.log("err", err);

          if (err.response.data.status !== 201) {
            history("/ParticipantForm");
          }
          setError(err?.response?.data?.message);
          return err.message;
        });
  });
  // useEffect(() => {
  //   dispatch(getAdminById());
  // },[]);

   const formList = [];

  console.log("errors", errors);
  console.log("totalGuest", totalGuest);

  return (
    <div className={`nc-PageSignUp  ${className}`} data-nc-id="PageSignUp">
      <Helmet>
        <title>Participant Details</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Participant Details
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
          {addForm()}
          <div>
            {forms.map((form) =>{
              return (
            <form className="grid grid-cols-1 gap-6" onSubmit={onSubmit}>
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
                  age
                </span>
                <input
                  {...register("age")}
                  type="text"
                  placeholder="Last Name"
                  className="mt-1"
                />
                {errors?.age && <p>{errors.age.message}</p>}
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

              {<ButtonPrimary onClick={handlePayment} type="submit">
                Continue
              </ButtonPrimary>}
            </form>)
            })
            }
          </div>

          {/* ==== */}
          {/* <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Already have an account? {` `}
            <Link to="/login">Sign in</Link>
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default ParticipantForm;
