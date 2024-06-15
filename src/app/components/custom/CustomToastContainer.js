import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToastContainer = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={false}
      hideProgressBar={true}
      closeOnClick={true}
      draggable={true}
      pauseOnHover={true}
      theme="colored"
    />
  );
};

export default CustomToastContainer;
