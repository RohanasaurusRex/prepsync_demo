import "@styles/globals.css";
import Nav from "@components/NavigationBar";
import Home from "./page";
export const metadata = {
  title: "Prep Sync AI",
  description: "Discover your inner DECA Wiz.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div>
          <Nav />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
