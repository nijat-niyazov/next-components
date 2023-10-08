import getJWTSecret from "@/libs/jwt-key";
import { SignJWT } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { username, password } = await req.json();

  let success;

  if (username === "admin" || password === "admin") {
    success = true;
    if (success) {
      const token = await new SignJWT({
        username,
        role: "admin" || "or data from backend", //! we can use this role in whole app
      })
        .setProtectedHeader({ alg: "HS256" }) //! alg is algorithm;
        .setIssuedAt()
        .setExpirationTime("300s")
        .sign(getJWTSecret());

      const res = NextResponse.json({
        success: true,
      });

      res.cookies.set({
        name: "token",
        value: token,
        path: "/",
      });

      return res;
    }
  }
  return NextResponse.json({
    success: false,
  });
}
