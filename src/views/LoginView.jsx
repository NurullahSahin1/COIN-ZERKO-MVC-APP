import React from "react";
import InputFieldView from "./InputFieldView";
import { inputs } from "../constants";

export const LoginView = ({ formik }) => {
  return (
    <div className="login-page ">
      <div className="container my-5" style={{ maxWidth: "800px" }}>
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
          className="d-flex flex-column gap-2 mt-3 justify-content-center"
        >
          <h3 className="d-flex justify-content-center align-items-center bg-warning p-1 rounded-3 mb-2 ">
            Registry Form
          </h3>
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
