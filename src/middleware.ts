import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Lógica adicional si es necesario (ej. verificación de roles)
    console.log(req.nextauth.token); // Accede al token del usuario autenticado
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // Requiere token para acceder
    },
    pages: {
      signIn: "/user/login", // Redirige a la página de inicio de sesión si no está autenticado
    },
  }
);

export const config = {
  matcher: ["/admin/:path*"], // Protege todas las rutas bajo /protected
};