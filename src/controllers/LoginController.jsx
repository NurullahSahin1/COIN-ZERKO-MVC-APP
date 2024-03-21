import React from "react";
import { LoginView } from "../views/LoginView";
import { scheme } from "../scheme";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const LoginController = () => {
  const navigate = useNavigate();

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
      navigate("/home");
    },
  });
  return <LoginView formik={formik} />;
};

export default LoginController;
