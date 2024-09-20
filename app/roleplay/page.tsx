"use client";

import { useState } from "react";
import Dropdown from "@components/Dropdown";

const RoleplayPage = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(e.target.value);
  };

  const handleClick = async () => {
    try {
      const res = await fetch("/api/gpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: query }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch response");
      }

      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error("Error:", error);
      setResponse("An error occurred while processing your request.");
    }
  };
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-start py-10">
      <h1 className="font-electrolize text-5xl font-extrabold text-gray-800 mb-6">
        Roleplay
      </h1>
      <p className="font-squada text-lg leading-loose text-gray-700 mb-6 ml-7">
        The RolePlay feature in Prep Sync AI is a sophisticated tool designed to
        simulate real-world business scenarios, allowing users to practice and
        improve their performance in DECA competitions...
      </p>
      <textarea
        value={query}
        onChange={handleChange}
        className="w-full h-40 p-4 border border-gray-300 rounded mb-4"
      />
      <Dropdown
        list={[
          "Principles Of Finance",
          "Principles Of Marketing",
          "Principles of Hospitality",
          "Principles of Business Management",
        ]}
        question="Choose an event?"
      />
      <button
        onClick={handleClick}
        className="bg-purple-800 hover:bg-indigo-900 text-white font-bold py-3 px-6 my-3 rounded-full transition duration-200"
      >
        Generate Roleplay
      </button>
      {response && (
        <div className="mt-6 p-4 bg-gray-100 border border-gray-300 rounded">
          <h2 className="font-bold text-lg mb-2">Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </section>
  );
};

export default RoleplayPage;
