"use client";

import OpenAI from "openai";
import { useState } from "react";

const RoleplayPage = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(e.target.value);
  };

  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const handleClick = async () => {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: query }],
      max_tokens: 20,
    });
    try {
      setResponse(
        response.choices[0].message.content || "No response from GPT-4"
      );
      console.log(response.choices[0].message.content);
    } catch (error) {
      console.error("Error calling OpenAI API: ", error);
      setResponse("An error occurred. Please try again.");
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
      <button
        onClick={handleClick}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 my-3 rounded-full transition duration-200"
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
