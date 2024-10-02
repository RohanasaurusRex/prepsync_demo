"use client";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Dropdown from "@components/Dropdown";

const RoleplayPage = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<string>("");
  const [selectedInstructionalArea, setSelectedInstructionalArea] =
    useState<string>("");
  const [canOutput, setCanOutput] = useState(false); // canOutput is now stateful

  const selectEvent = (item: string) => {
    setSelectedEvent(item);
  };

  const selectInstructionalArea = (item: string) => {
    setSelectedInstructionalArea(item);
  };

  const addPrompt = () => {
    let lenEvent = selectedEvent.length >= 5;
    let lenInstructionalArea = selectedInstructionalArea.length >= 5;
    if (lenEvent && lenInstructionalArea) {
      setQuery(
        "Can you create a sample deca roleplay that directly mimics one of a real competiton roleplay. It should include performance indicatoars and a 3+ pargraph scenario section. It should be on " +
          selectedEvent +
          ". The instructional area needs to be: " +
          selectedInstructionalArea +
          "."
      );
      console.log(query);
      setCanOutput(true); // update the state
    } else {
      alert("No input given");
      setCanOutput(false); // prevent output
    }
  };

  // Use effect to call API when the query changes and canOutput is true
  useEffect(() => {
    if (query !== "" && canOutput) {
      callAPI();
    }
  }, [query, canOutput]); // watch both query and canOutput

  const callAPI = async () => {
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

  const handleClick = () => {
    addPrompt(); // Trigger the state update and API call via useEffect
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
      <div className="flex space-x-4 mb-4">
        {" "}
        {/* Flex row for dropdowns */}
        <Dropdown
          list={[
            "Principles Of Finance",
            "Principles Of Marketing",
            "Principles of Hospitality",
            "Principles of Business Management",
          ]}
          question="Choose an event?"
          onSelect={selectEvent}
        />
        <Dropdown
          list={[
            "Customer Relations",
            "Business Law",
            "Communications",
            "Entrepreneurship",
            "Marketing",
            "Operations",
            "Risk Management",
            "Strategic Management",
            "Human Resources Management",
            "Financial-Information Management",
            "Financial Analysis",
            "Emotional Intelligence",
            "Economics",
          ]}
          question="Choose an instructional area?"
          onSelect={selectInstructionalArea}
        />
      </div>
      <button
        onClick={handleClick}
        className="bg-purple-800 hover:bg-indigo-900 text-white font-bold py-3 px-6 my-3 rounded-full transition duration-200"
      >
        Generate Roleplay
      </button>
      {response && (
        <div className="mt-6 p-4 bg-gray-100 border border-gray-300 rounded">
          <h2 className="font-bold text-lg mb-2">Response:</h2>
          <ReactMarkdown>{response}</ReactMarkdown>
        </div>
      )}
    </section>
  );
};

export default RoleplayPage;
