import isValidToken from "@/libs/jwt-security";
// import { cookies } from "next/headers";

const fromServer = async () => {
  const cookies = require("next/headers").cookies;
  //* we can import cookies like this to use with client component

  const { value: token } = cookies().get("token") ?? { value: "" };

  const isVerified = await isValidToken(token);
  return isVerified;
};

import React from "react";
import Cookies from "universal-cookie";

export const useAuth = () => {
  // * This hook must be used with React.(hook.  Because u can't use from server and import hook direclty with name

  const [auth, setAuth] = React.useState<any>(null);

  const getToken = async () => {
    const cookies = new Cookies();
    // package for get cookies in client side

    const token = cookies.get("token") ?? null;

    const isVerified = await isValidToken(token);
    setAuth(isVerified);
  };

  React.useEffect(() => {
    getToken();
  }, []);

  return auth;
};

useAuth.fromServer = fromServer;
