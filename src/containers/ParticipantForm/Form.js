import axios from "axios";
import { ip } from "config/config";
import React from "react";
import { useForm, Resolver } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ButtonPrimary from "shared/Button/ButtonPrimary";

function Form({ formNumber, counter, setFormNumber, totalGuest }) {
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

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const { ticketDetails } = useSelector((state) => state.userReducer);

  //   const onSubmit = handleSubmit((data) => {
  //     console.log(data);
  //     const token = admin.accessToken;
  //     const contactNumber = getValues("contactNumber");
  //     axios
  //       .post(`${ip}/add-admin-participants/${id}`, data, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       .then((res) => {
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
  //   });

  const { admin, currentAdmin } = useSelector((state) => state.loginReducer);
  const history = useNavigate();
  const { id } = useParams();

  const onSubmit = (data) => {
    const image = ticketDetails?.image;
    const title = ticketDetails?.title;
    const startDate = ticketDetails?.startDate;
    const endDate = ticketDetails?.endDate;
    const firstName = getValues("firstName");
    const lastName = getValues("lastName");
    const email = getValues("email");
    const gender = getValues("gender");
    const phone = getValues("phone");
    const age = getValues("age");

    const newData = {
      image,
      title,
      startDate,
      endDate,
      firstName,
      lastName,
      email,
      gender,
      phone,
      age,
    };

    const token = admin?.accessToken;
    const contactNumber = getValues("contactNumber");
    axios
      .post(`${ip}/add-admin-participants/${id}`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        debugger;
        console.log("res", res);

        if (formNumber < totalGuest) {
          setFormNumber(formNumber + 1);
        }
        reset();

        if (res.data.status === 201) {
          history(`/user-bookings/${id}`)
        }
        return res.data;
      })
      .catch((err) => {
        console.log("err", err);

        if (err.response.data.status !== 201) {
          history("/ParticipantForm");
        }
        // setError(err?.response?.data?.message);
        return err.message;
      });
  };
  console.log(formNumber, totalGuest);

  return (
    <div>
      <p style={{display:"flex", justifyContent:"flex-end"}}>Page {counter}</p>
      <div>
        <form
          className="grid grid-cols-1 gap-6"
          onSubmit={handleSubmit(onSubmit)}
          id="my-form"
        >
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              First Name
            </span>
            <input
              {...register("firstName", { required: true })}
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
              {...register("lastName", { required: true })}
              type="text"
              placeholder="Last Name"
              className="mt-1"
            />
            {errors?.lastName && <p>{errors.lastName.message}</p>}
          </label>
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">age</span>
            <input
              {...register("age", { required: true })}
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
              {...register("email", { required: true })}
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
              {...register("contactNumber", { required: true })}
              type="text"
              placeholder="contactNumber"
              className="mt-1"
            />
            {errors?.contactNumber && <p>{errors.contactNumber.message}</p>}
          </label>

          <label className="block">
            <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
              Gender
            </span>
            <select {...register("gender")}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>

          {/* {<ButtonPrimary onClick={() => { }} type="submit">
                    Continue
                </ButtonPrimary>} */}
        </form>
      </div>
    </div>
  );
}

export default Form;
