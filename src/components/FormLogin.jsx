import React from "react";
import { Formik } from "formik";
import "../style/Form.css";

const FormLogin = ({ hideModalFormLogin, showFormRigisterToLogin }) => {
  //   console.log(hideFormRigister);
  const hideModalLogin = () => {
    hideModalFormLogin();
  };
  const fixHideModalItem = (e) => {
    e.stopPropagation();
  };
  const showFormRigistertoLogin1 = () => {
    showFormRigisterToLogin();
    hideModalLogin();
  };
  return (
    <div onClick={hideModalLogin} className="modal-rigister">
      <div onClick={fixHideModalItem} className="modal-login-item">
        <h1 className="py-[15px]" data-aos="zoom-in">
          Login
        </h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Bạn chưa nhập trường này";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Eamil của bạn chưa đúng";
            }

            if (!values.password) {
              errors.password = "Bạn chưa nhập trường này";
            } else if (values.password.length < 5) {
              errors.password = "ban phai nhap tren 5 ky tu";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            alert("Success");
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="w-full border-[1px] border-[#ccc] h-[50px] mt-[10px] pl-[10px]"
                  placeholder="Email"
                  data-aos="zoom-in"
                />
              </div>
              <div className="text-[14px] text-red-500 mt-[5px]">
                {errors.email && touched.email && errors.email}
              </div>

              <div className="">
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="w-full border-[1px] border-[#ccc] h-[50px] mt-[10px] pl-[10px]"
                  placeholder="password"
                  data-aos="zoom-in"
                ></input>
              </div>
              <div className="text-[14px] text-red-500 mt-[5px]">
                {errors.password && touched.password && errors.password}
              </div>
              <div className="flex items-center mt-[10px]">
                <button
                  className="w-[120px] h-[45px] bg-[#333] text-white rounded-[5px] uppercase mr-[15px]"
                  type="submit"
                  disabled={isSubmitting}
                  data-aos="zoom-in"
                >
                  Login
                </button>
                <p
                  onClick={showFormRigistertoLogin1}
                  className="text-[13px] cursor-pointer"
                >
                  Create new account?
                </p>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormLogin;
