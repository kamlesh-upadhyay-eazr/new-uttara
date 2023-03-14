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
import Form from "./Form";
import Button from "shared/Button/Button";

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

const ParticipantForm = ({ className = "" }) => {
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
  console.log("id", id);

  const [transactionData, setTransactionData] = useState(null);
  const [formNumber, setFormNumber] = useState(1);
  const [attendeeDetails, setAttendeeDetails] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getDetails = (data) => {
    setAttendeeDetails(data);
  };

  const { ticketDetails } = useSelector((state) => state.userReducer);

  const forms = [];
  const addForm = () => {
    forms.push(formNumber);
  };

  console.log("ticketDetails", ticketDetails);

  const { amount, totalGuest } = useSelector((state) => state.GuestInputs);
  const { admin, currentAdmin } = useSelector((state) => state.loginReducer);
  // console.log("token", admin);
  console.log("currentAdmin", admin?.email);

  const initPayment = (data) => {
    console.log("dataaaa", data);
    const options = {
      name: 'Gethnaa',
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
            const email = { email: admin?.email };
            axios
              .post(`${ip}/send-mail`, email)
              .then((res) => {
                return res?.data;
              })
              .catch((err) => {
                return err?.message;
              });
            history(`/user-bookings/${id}`);
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
    const orderUrl = `${ip}/tc-orders`;
    const token = admin.accessToken;
    axios
      .post(
        orderUrl,
        { amount },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log("res", res);
        setTransactionData(res.data);
        initPayment(res.data);
      });
  };

  const [error, setError] = useState("Not Valid");

  // console.log("admin", admin._id);

  // const onSubmit = handleSubmit((data) => {
  //   console.log(data);
  //   const token = admin.accessToken;
  //    const contactNumber = getValues("contactNumber");
  //   axios.post(`${ip}/add-admin-participants/${id}`, data,{
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //   .then((res) => {
  //         debugger;
  //         console.log("res", res);

  //         if (res.data.status === 201) {
  //           history("/pay-done");
  //         }
  //         return res.data;
  //       })
  //       .catch((err) => {
  //         console.log("err", err);

  //         if (err.response.data.status !== 201) {
  //           history("/ParticipantForm");
  //         }
  //         setError(err?.response?.data?.message);
  //         return err.message;
  //       });
  // });

  // const onSubmit = handleSubmit((data) => {
  //   console.log(data);
  //   const token = admin.accessToken;
  //   const contactNumber = getValues("contactNumber");
  //   axios
  //     .post(`${ip}/add-admin-participants/${id}`, data, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((res) => {
  //       debugger;
  //       console.log("res", res);

  //       if (res.data.message === "Data save to DB successfully!!!") {
  //         setSuccessfullySave(res.data.message);

  //         axios
  //           .patch(`${ip}/update-ticket/${ticketDetails[index]._id}`)
  //           .then((res) => {
  //             addElement();
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //           });
  //       }
  //       // if (res.data.status === 201) {
  //       //   history("/pay-done");
  //       // }
  //       return res.data;
  //     })
  //     .catch((err) => {
  //       console.log("err", err);

  //       if (err.response.data.status !== 201) {
  //         history("/ParticipantForm");
  //       }
  //       setError(err?.response?.data?.message);
  //       return err.message;
  //     });
  // });

  // useEffect(() => {
  //   dispatch(getAdminById());
  // },[]);

  const formList = [];

  // console.log("errors", errors);
  // console.log("totalGuest",formNumber, totalGuest);

  return (
    <div className={`nc-PageSignUp  ${className}`} data-nc-id="PageSignUp">
      <Helmet>
        <title>Participant Details  </title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Participant Details
        </h2>
        <div className="max-w-md mx-auto space-y-6 ">
          {addForm()}
          <div>
            {forms.map((form) => {
              return (
                <Form
                  counter={form}
                  formNumber={formNumber}
                  setFormNumber={setFormNumber}
                  totalGuest={totalGuest}
                />
              );
            })}
            <div
              style={{
                marginTop: "1.25rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "2.5rem",
                width: "100%",
                backgroundColor: "#4338ca",
                // color: "#f9fafb",
                lineHeight: "24px",
                borderRadius: "999px",
              }}
            >
              {formNumber === totalGuest ? (
                <button
                  className={`ttnc-ButtonPrimary disabled:bg-opacity-70 hover:bg-primary-700 text-neutral-50 ${className}`}
                  form="my-form"
                  type="submit"
                  onClick={handlePayment}
                >
                  Make Payment
                </button>
              ) : (
                <button
                  className={`ttnc-ButtonPrimary disabled:bg-opacity-70 hover:bg-primary-700 text-neutral-50 ${className}`}
                  form="my-form"
                  type="submit"
                >
                  Continue
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantForm;
