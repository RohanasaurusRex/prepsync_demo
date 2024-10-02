import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DECA_Logo from "../public/assets/static/images/deca_logo.png";

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen relative flex flex-col">
      <Image
        src={DECA_Logo}
        alt="DECA Logo Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />
      <main className="flex-grow flex flex-col justify-center items-center text-center px-4 py-16 relative z-10">
        <h2 className="text-4xl font-extrabold text-white mb-6 bg-black bg-opacity-60 p-4 rounded">
          Empowering Your DECA Journey
        </h2>
        <p className="text-lg text-white mb-8 max-w-3xl bg-black bg-opacity-60 p-4 rounded">
          Prep Sync AI is your ultimate tool for excelling in DECA roleplay
          events. Practice with interactive scenarios and receive tailored
          feedback to boost your performance.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <Link
            href="/roleplay"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 mb-4 md:mb-0"
          >
            Get Started
          </Link>
          <Link
            href="/roleplay"
            className="bg-gray-800 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
          >
            Explore Features
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
