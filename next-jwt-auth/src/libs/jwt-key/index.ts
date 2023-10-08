const getJWTSecret = () => {
  const secretKey = process.env.NEXT_PUBLIC_JWT_KEY;

  // if there is not key we have to throw an error
  if (!secretKey) {
    throw new Error("JWT_SECRET_KEY is not defined");
  }

  // if there is then we need encode it with this code ⬇
  return new TextEncoder().encode(secretKey);
};

export default getJWTSecret;
