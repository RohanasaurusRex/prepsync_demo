"use client";

import Link from "next/link";
import Image from "next/image";
import NavLogo from "../public/assets/static/images/LogoNoWords.ico";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Nav = () => {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Handle Sign In and redirect to /roleplay
  const handleSignIn = async () => {
    setLoading(true);
    try {
      await signIn(undefined, { callbackUrl: "/roleplay" });
    } finally {
      setLoading(false);
    }
  };

  // Handle Sign Out and redirect to Home
  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signOut({ callbackUrl: "/" });
    } finally {
      setLoading(false);
    }
  };

  // Redirect if user is already signed in
  useEffect(() => {
    if (session) {
      router.push("/roleplay");
    }
  }, [session, router]);

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
