// middleware.ts
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/signin", // Add custom sign-in page
  },
});

export const config = {
  matcher: ["/protected/*"], // Specify which routes should require authentication
};
