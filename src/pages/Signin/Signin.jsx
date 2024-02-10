import React, { useContext } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Signin = () => {
  const { sendDataToSignUp } = useContext(UserContext);

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("username is required")
      .min(3, "username must be more than 3 characters")
      .max(8, "username must be less than 8 characters"),

    email: Yup.string()
      .required("email is required")
      .email("please enter a valid email"),
    password: Yup.string()
      .required("password is required")
      .matches(/^[A-Z]/, "The password field must be at least 6 characters."),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match")
      .required("Password confirmation is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      const response = await sendDataToSignUp(values);
      if (response.status == 200) {
        console.log(response);
        navigate("/login");
      }
    },
  });

  return (
    <div>
      <section className="bg-gray-50 container mx-auto">
        <form
          className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen "
          onSubmit={formik.handleSubmit}
        >
          <div className="w-full bg-white rounded-lg shadow-lg shadow-chocolate sha dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Sign in to your account
              </h1>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    type="text"
                    placeholder="Name"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.name && formik.touched.name ? (
                    <div className="bg-red-500 text-white px-2 rounded-lg mt-1 w-full">
                      {formik.errors.name}
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <div className="bg-red-500 text-white px-2 rounded-lg mt-1 w-full">
                      {formik.errors.email}
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <div className="bg-red-500 text-white px-2 rounded-lg mt-1 w-full">
                      {formik.errors.password}
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div>
                  <label
                    htmlFor="re-Password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="re-Password"
                    id="password_confirmation"
                    name="password_confirmation"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    value={formik.values.password_confirmation}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.password_confirmation &&
                  formik.touched.password_confirmation ? (
                    <div className="bg-red-500 text-white px-2 rounded-lg mt-1 w-full">
                      {formik.errors.password_confirmation}
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <button
                  disabled={!(formik.isValid && formik.dirty)}
                  type="submit"
                  className="w-full cursor-pointer text-white bg-pri focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 ">
                  have an account yet?
                  <Link
                    to={"/login"}
                    className="font-medium text-primary-600 hover:underline "
                  >
                    login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Signin;
