"use client";

const RoleplayPage = () => {
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-start py-10">
      <h1 className="font-electrolize text-5xl font-extrabold text-gray-800 mb-6">
        Roleplay
      </h1>
      <p className="font-squada text-lg leading-relaxed text-gray-700 mb-6">
        The RolePlay feature in Prep Sync AI is a sophisticated tool designed to
        simulate real-world business scenarios, allowing users to practice and
        improve their performance in DECA competitions. This feature enables
        users to participate in interactive role-playing exercises where they
        can take on various business roles, such as a project manager or a CEO,
        and engage in conversations with AI-driven characters. The AI provides
        tailored feedback based on the user's responses, helping them refine
        their problem-solving, communication, and strategic thinking skills. By
        practicing with these scenarios, users can gain confidence and better
        prepare for the actual DECA events, making the RolePlay feature an
        invaluable resource for serious competitors.
      </p>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition duration-200">
        Generate Roleplay
      </button>
    </section>
  );
};

export default RoleplayPage;
