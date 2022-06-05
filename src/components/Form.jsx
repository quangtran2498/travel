import React from "react";
import { Formik } from "formik";

const Form = () => {
  return (
    <div>
      <h1>Contact Form</h1>
      <Formik
        initialValues={{ email: "", name: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Bạn chưa nhập trường này";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Eamil của bạn chưa đúng";
          }
          if (!values.name) {
            errors.name = "Bạn chưa nhập trường này";
          } else if (values.name.length < 5) {
            errors.name = "ban phai nhap tren 5 ky tu";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          console.log(values);
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
                type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className="w-full border-[1px] border-[#ccc] h-[50px] mt-[10px] pl-[10px]"
                placeholder="Full Name"
              />
            </div>
            <div className="text-[14px] text-red-500 mt-[5px]">
              {errors.name && touched.name && errors.name}
            </div>
            <div>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="w-full border-[1px] border-[#ccc] h-[50px] mt-[10px] pl-[10px]"
                placeholder="Email"
              />
            </div>
            <div className="text-[14px] text-red-500 mt-[5px]">
              {errors.email && touched.email && errors.email}
            </div>

            <div className="">
              <textarea
                className="w-full h-[120px] border-[1px] border-[#ccc] mt-[10px] pl-[10px]"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Content Email"
              ></textarea>
            </div>

            <button
              className="w-[150px] h-[50px] bg-[#333] text-white rounded-[5px] mt-[10px] uppercase"
              type="submit"
              disabled={isSubmitting}
            >
              send mail
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
