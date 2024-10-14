"use client";

import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  // Handle Get Started click
  const handleGetStartedClick = async () => {
    if (session) {
      // Redirect to the roleplay page if signed in
      router.push("/roleplay");
    } else {
      // Redirect to the sign-in page if not signed in
      await signIn(undefined, { callbackUrl: "/roleplay" }); // Adjust the path as necessary
    }
  };

  return (
    <div>
      <main className="flex-grow flex flex-col justify-center items-center text-center px-4 py-16 relative z-10">
        <h2 className="text-4xl font-extrabold font-electrolize text-white mb-6 bg-opacity-60 p-4 rounded">
          Empowering Your DECA Journey
        </h2>
        <p className="text-lg font-electrolize text-white mb-8 max-w-3xl bg-opacity-60 p-4 rounded">
          Prep Sync AI revolutionizes the way you prepare for DECA roleplay
          events. Dive into dynamic, real-world business scenarios tailored to
          challenge and sharpen your skills. With interactive roleplays, instant
          feedback, and a customized learning path, you'll be empowered to
          elevate your performance and gain the competitive edge needed to
          succeed.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <button
            onClick={handleGetStartedClick}
            className="bg-blue-600 font-squada text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 mb-4 md:mb-0"
          >
            Get Started
          </button>
          <Link
            href="/about_us"
            className="bg-gray-800 font-squada text-white py-3 px-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
          >
            Get To Know Us
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
