import "@styles/globals.css";
import Nav from "@components/NavigationBar";
import Home from "./page";
import Footer from "@components/Footer";
import Provider from "@components/Provider";

export const metadata = {
  title: "Prep Sync AI",
  description: "Discover your inner DECA Wiz.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-inter">
        <Provider>
          <div className="min-h-screen flex flex-col">
            <Nav />
            <main className="">{children}</main>
          </div>
          <Footer></Footer>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
