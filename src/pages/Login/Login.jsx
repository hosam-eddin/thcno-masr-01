import React, { useContext } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const { sendDataToLogin, setToken } = useContext(UserContext);

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("Login failed. Please check your Password or Acc"),
    password: Yup.string()
      .required("password is required")
      .matches(/^[A-Z]/, "Login failed. Please check your Password or Acc"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await sendDataToLogin(values);
        if (response.status === 200) {
          console.log(response);
          console.log(response.data.token);
          localStorage.setItem("token", `${response.data.token}`);
          setToken(response.data.token);
          navigate("/");
        }
      } catch (error) {
        console.error("Error during login:", error);
        toast.error("Login failed. Please check your Password or Acc.");
      }
    },
  });

  return (
    <div>
      <section className="bg-gray-50">
        <form
          className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
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
                </div>
                <button
                  disabled={!(formik.isValid && formik.dirty)}
                  type="submit"
                  className="w-full cursor-pointer text-white bg-pri focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 ">
                  Don’t have an account yet?
                  <Link
                    to={"/signin"}
                    className="font-medium text-primary-600 hover:underline "
                  >
                    Sign up
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

export default Login;
