import "@styles/globals.css";
import Nav from "@components/NavigationBar";
import Footer from "@components/Footer";
import Provider from "@components/Provider";

export const metadata = {
  title: "Prep Sync AI",
  description: "Discover your inner DECA Wiz.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="font-inter">
        <Provider>
          <div className="min-h-screen flex flex-col">
            <Nav />
            <main className="flex-grow">{children}</main>
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
