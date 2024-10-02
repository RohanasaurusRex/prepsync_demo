"use client";

import Link from "next/link";
import Image from "next/image";
import NavLogo from "../public/assets/static/images/LogoNoWords.ico";
import { useState } from "react";
import { useSession } from "next-auth/react";

const Nav = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { data: session } = useSession();

  const handleLogIn = () => {
    setLoggedIn(true);
  };

  const handleLogOut = () => {
    setLoggedIn(false);
  };

  return (
    <nav className="flex items-center nav_bar px-8 py-4">
      <div className="flex items-center">
        <Link href="/">
          <Image src={NavLogo} alt="Logo" width={80} height={80} />
        </Link>
        <Link
          href="/roleplay"
          className="nav-link text-white font-squada text-xl px-4 hov transition duration-200"
        >
          Roleplay Prep
        </Link>
        <Link
          href="/about_us"
          className="nav-link text-white font-squada text-xl px-4 hov transition duration-200"
        >
          About Us
        </Link>
      </div>
      <div className="ml-auto flex items-center">
        {loggedIn ? (
          <>
            <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden mr-4">
              <Image
                src={NavLogo}
                alt="Profile Picture"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <button
              onClick={handleLogOut}
              className="bg-white text-black px-4 py-2 rounded-md font-squada hover:bg-gray-300 transition duration-200"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {}}
              className="bg-white text-black px-4 py-2 rounded-md font-squada hover:bg-gray-300 transition duration-200 mr-4"
            >
              Sign Up
            </button>
            <button
              onClick={handleLogIn}
              className="bg-white text-black px-4 py-2 rounded-md font-squada hover:bg-gray-300 transition duration-200"
            >
              Sign In
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
