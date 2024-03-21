import { useFormik } from "formik";
import React from "react";
import { scheme } from "../scheme";
import InputFieldView from "../views/InputFieldView";
import { inputs } from "../constants";

export const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
    },

    // Validation Scheme
    validationSchema: scheme,

    onSubmit: (values, actions) => {
      console.log(values);
      console.log(actions);
    },
  });

  return (
    <div className="login-page ">
      <div className="container my-5">
        <h2 className="d-flex gap-3 justify-content-center align-items-center">
          <img
            height={60}
            src="/coinlogo.png
          "
            alt=""
          />
          <span>CoinZerko</span>
        </h2>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-3 mt-5 justify-content-center"
        >
          {inputs.map((data) => (
            <InputFieldView formik={formik} data={data} />
          ))}

          <button className="btn btn-warning text-white" type="submit">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};
