"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc"; // Google logo
import { FaGithub } from "react-icons/fa"; // GitHub logo

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleCredentialsSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (!result?.ok) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-hsl(260, 100%, 10%)">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-gray-100 text-center mb-6">
          Sign In
        </h1>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        
        {/* OAuth Buttons */}
        <div className="flex flex-col space-y-4 mb-6">
          <button
            onClick={() => signIn("google")}
            className="flex items-center justify-center w-full bg-white text-black py-3 px-4 rounded-lg shadow hover:shadow-lg transform hover:scale-105 active:scale-95 transition duration-200 ease-in-out"
          >
            <FcGoogle className="mr-2" size={24} />
            Sign in with Google
          </button>

          <button
            onClick={() => signIn("github")}
            className="flex items-center justify-center w-full bg-gray-900 text-white py-3 px-4 rounded-lg shadow hover:shadow-lg transform hover:scale-105 active:scale-95 transition duration-200 ease-in-out"
          >
            <FaGithub className="mr-2" size={24} />
            Sign in with GitHub
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-4">
          <span className="w-1/3 border-t border-gray-500"></span>
          <span className="mx-2 text-gray-300">OR</span>
          <span className="w-1/3 border-t border-gray-500"></span>
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleCredentialsSignIn} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-700 transition duration-200"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-700 transition duration-200"
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-800 hover:bg-purple-900 text-white py-3 rounded-lg shadow hover:shadow-lg transform hover:scale-105 active:scale-95 transition duration-200 ease-in-out"
          >
            Sign in with Credentials
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
