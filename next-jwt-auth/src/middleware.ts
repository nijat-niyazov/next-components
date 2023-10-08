import { NextResponse, type NextRequest } from "next/server";
import isValidToken from "./libs/jwt-security";

const authPages = ["/regiter", "/login"];

const inAuthPage = (pathname: string) =>
  authPages.some((path) => path.startsWith(pathname));

export async function middleware(request: NextRequest) {
  const {
    cookies,
    url,
    nextUrl: { pathname, search: nextSearch, searchParams: nextSearchParams },
  } = request;

  //? url is the original request URL
  //? pathname is the URL after slash /
  //? search is the query string after question mark ?
  //? searchParams is the URLSearchParams object for the query string

  const { value: token } = cookies.get("token") ?? { value: null };

  const validToken = token && (await isValidToken(token));

  const isAuthPage = inAuthPage(pathname);
  //* we have to write it because without checking current path it will be inifinitve loop because of redirect to login and do same again
  //* we have to send pathname because there might be searchParams like ?next=/admin

  if (isAuthPage) {
    if (!validToken) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/", url));
  }

  if (!validToken) {
    const searchParams = new URLSearchParams(nextSearchParams);
    //* because we want keep other searchParams like ?brand=/lufian

    // searchParams.set("next", pathname);
    //* we are setting beside login serachparams that redirected to login page. Because after login we will redirect to that url with searchParams

    return NextResponse.redirect(new URL(`/login/?${searchParams}`, url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin", "/login"],
};
