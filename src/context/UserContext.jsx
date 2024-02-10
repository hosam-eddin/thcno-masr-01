
import axios from "axios";
import { createContext, useState } from "react";

export const UserContext = createContext(0);

export default function UserContextProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  async function sendDataToSignUp(values) {
    const data = await axios.post(
      //   `${process.env.BASE_URL}/api/auth/register`,
      `https://bilsservices.com/api/auth/register`,
      values
    );
    console.log(data);
    return data;
  }

  async function sendDataToLogin(values) {
    const data = await axios.post(
      //   `${process.env.BASE_URL}/api/auth/register`,
      `https://bilsservices.com/api/auth/login`,
      values
    );
    console.log(data);
    return data;
  }

  function logOut() {
    console.log("Logging out...");
    localStorage.removeItem("token");
    setToken(null);
  }

  return (
    <UserContext.Provider
      value={{
        sendDataToSignUp,
        token,
        setToken,
        sendDataToLogin,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
