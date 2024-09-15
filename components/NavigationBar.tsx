"use client";

import Link from "next/link";
import Image from "next/image";
import NavLogo from "../public/assets/static/images/LogoNoWords.ico";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
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
    </nav>
  );
};

export default Nav;
