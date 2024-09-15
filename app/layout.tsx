import "@styles/globals.css";
import Nav from "@components/NavigationBar";
import Home from "./page";
import Footer from "@components/Footer";

export const metadata = {
  title: "Prep Sync AI",
  description: "Discover your inner DECA Wiz.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-inter">
        <div className="min-h-screen flex flex-col">
          <Nav />
          <main className="">{children}</main>
        </div>
      </body>
      <Footer></Footer>
    </html>
  );
};

export default RootLayout;
