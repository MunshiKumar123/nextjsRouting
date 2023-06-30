import { NextResponse } from "next/server";
export function middleware(request) {
    let x = 11;
    if (x !== 10) {
        // if (request.nextUrl.pathname === "/login", request.url) {
        return NextResponse.redirect(new URL("/login", request.url))
        // }
    }

}

export const config = {
    matcher: ["/about/:path*", "/student/:path*", "/resi/:path*",]
}
