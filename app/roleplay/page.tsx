"use client";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Dropdown from "@components/Dropdown";
import { useSession } from "next-auth/react";

const RoleplayPage = () => {
  const { data: session, status } = useSession(); // Track user session

  const [query, setQuery] = useState("");
  const [currentStage, setCurrentStage] = useState(1);
  const [response, setResponse] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<string>("");
  const [selectedInstructionalArea, setSelectedInstructionalArea] =
    useState<string>("");
  const [canOutput, setCanOutput] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [responseAnimationClass, setResponseAnimationClass] = useState("");
  const [titleAnimationClass, setTitleAnimationClass] =
    useState("animate-slide-in");
  const [descAnimationClass, setDescAnimationClass] =
    useState("animate-fade-in");
  const [dropdownAnimationClass, setDropdownAnimationClass] =
    useState("animate-bounce");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const selectEvent = (item: string) => {
    setSelectedEvent(item);
  };

  const selectInstructionalArea = (item: string) => {
    setSelectedInstructionalArea(item);
  };

  const addPrompt = () => {
    const lenEvent = selectedEvent.length >= 5;
    const lenInstructionalArea = selectedInstructionalArea.length >= 5;
    if (lenEvent && lenInstructionalArea) {
      setQuery(
        `Can you create a sample DECA roleplay that directly mimics one of a real competition roleplay? 
        It should include performance indicators and a 3+ paragraph scenario section. 
        It should be on ${selectedEvent}. The instructional area needs to be: ${selectedInstructionalArea}.`
      );
      setCanOutput(true);
    } else {
      alert("No input given");
      setCanOutput(false);
    }
  };

  useEffect(() => {
    if (query !== "" && canOutput) {
      callAPI();
    }
  }, [query, canOutput]);

  const callAPI = async () => {
    setIsLoading(true); // Set loading state to true
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
      setResponseAnimationClass("animate-fade-in animate-slide-up");
    } catch (error) {
      console.error("Error:", error);
      setResponse("An error occurred while processing your request.");
      setResponseAnimationClass("");
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  const handleClick = () => {
    addPrompt();
  };

  useEffect(() => {
    if (session) {
      fetch('/api/sessionData')
        .then((res) => res.json())
        .then((data) => {
          setCurrentStage(data.progress.stage);
        });
    }
  }, [session]);


  const saveProgress = (stage: number) => {
    if (session) {
      fetch('/api/sessionData', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stage }),
      });
    }
  };

  const handleNextStage = () => {
    const newStage = currentStage + 1;
    setCurrentStage(newStage);
    saveProgress(newStage); // Save the progress
  };

  // If the session is still loading, show a loading message
  if (status === "loading") {
    return <p className="text-white text-center">Loading...</p>;
  }

  // If no user is signed in, show a message
  if (!session) {
    return (
      <p className="text-white text-center">
        No user signed in. Please log in to access this page.
      </p>
    );
  }

  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-start py-10">
      <h1
        className={`font-electrolize text-5xl font-extrabold text-gray-200 mb-6 ${titleAnimationClass}`}
      >
        Roleplay
      </h1>
      <p
        className={`font-squada text-lg leading-loose text-gray-300 mb-6 ml-7 ${descAnimationClass}`}
      >
        The Roleplay feature in Prep Sync AI is a sophisticated tool designed to
        simulate real-world business scenarios, allowing users to practice and
        improve their performance in DECA competitions.
      </p>
      <div className="flex space-x-4 mb-4">
        <div
          className={`w-full ${dropdownAnimationClass} ${
            isMounted ? "animate-bounce" : ""
          }`}
        >
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
        </div>
        <div
          className={`w-full ${dropdownAnimationClass} ${
            isMounted ? "animate-bounce" : ""
          }`}
        >
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
      </div>
      <button
        onClick={handleClick}
        className={`bg-purple-800 hover:bg-indigo-900 text-white font-bold py-3 px-6 my-3 rounded-full transition duration-200 ${
          isLoading ? "animate-pulse" : "animate-bounce"
        }`}
        disabled={isLoading} // Disable button while loading
      >
        {isLoading ? "Generating..." : "Generate Roleplay"}
      </button>
      {response && (
        <div
          className={`mt-6 p-4 bg-hsl(260, 100%, 10%) text-gray-200 border border-purple-800 rounded ${responseAnimationClass}`}
        >
          <h2 className="font-bold text-lg mb-2">Response:</h2>
          <ReactMarkdown>{response}</ReactMarkdown>
        </div>
      )}
    </section>
  );
};

export default RoleplayPage;
