import { jwtVerify } from "jose";
import getJWTSecret from "../jwt-key";

const isValidToken = async (doubtedtoken: string) => {
  try {
    const { payload } = await jwtVerify(doubtedtoken, getJWTSecret());
    return payload;
  } catch (err) {
    return null;
  }
};

export default isValidToken;
