"use client";

import { useEffect, useState } from "react";

const AboutUs = () => {
  const [fadeInClasses, setFadeInClasses] = useState([
    "opacity-0", // First paragraph
    "opacity-0", // Second paragraph
    "opacity-0", // Third paragraph
    "opacity-0", // Fourth paragraph
    "opacity-0", // Fifth paragraph
  ]);

  useEffect(() => {
    // Set a timeout for each paragraph to stagger the fade-in effect
    const timeouts = fadeInClasses.map((_, index) => {
      return setTimeout(() => {
        setFadeInClasses((prevClasses) => {
          const newClasses = [...prevClasses];
          newClasses[index] = "opacity-100"; // Change opacity to fully visible
          return newClasses;
        });
      }, index * 150); // Stagger by 150ms for fading
    });

    // Cleanup the timeouts on component unmount
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-start py-10 px-0">
      <h1
        className={`font-electrolize text-5xl font-extrabold text-white mb-8 text-center transition-opacity duration-500 ${fadeInClasses[0]}`}
      >
        Meet the Team Behind Prep Sync AI
      </h1>
      <p
        className={`text-lg leading-loose text-white mb-5 ml-7 mr-20 text-justify font-squada transition-opacity duration-500 ${fadeInClasses[1]}`}
      >
        We are Rohan and Vivaan, two passionate high school students; with a
        shared interest in both programming and business, we've combined our
        skills to create Prep Sync AI, a platform designed to help DECA
        participants excel in their role-play events.
      </p>
      <p
        className={`text-lg leading-loose text-white mb-5 mx-7 text-justify font-squada transition-opacity duration-500 ${fadeInClasses[2]}`}
      >
        Our programming journey started with Python and Java, where we've
        developed a solid foundation in building applications and solving
        complex problems.
      </p>
      <p
        className={`text-lg leading-loose text-white mb-5 mx-7 text-justify font-squada transition-opacity duration-500 ${fadeInClasses[3]}`}
      >
        Through Prep Sync AI, we aim to leverage our technical skills to give
        DECA participants a powerful tool to practice and optimize their
        performance. We believe in the power of preparation and are committed to
        helping others succeed in their DECA endeavors.
      </p>
      <p
        className={`text-lg leading-loose text-white mx-7 text-justify font-squada transition-opacity duration-500 ${fadeInClasses[4]}`}
      >
        Thank you for visiting our platform. We hope you find it as helpful and
        inspiring as we do!
      </p>
    </section>
  );
};

export default AboutUs;
