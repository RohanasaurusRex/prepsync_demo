import Head from "next/head";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col justify-center items-center text-center px-4 py-16">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Empowering Your DECA Journey
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl">
          Prep Sync AI is your ultimate tool for excelling in DECA roleplay
          events. Practice with interactive scenarios and receive tailored
          feedback to boost your performance.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <Link
            href="/get-started"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 mb-4 md:mb-0"
          >
            Get Started
          </Link>
          <Link
            href="/features"
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
