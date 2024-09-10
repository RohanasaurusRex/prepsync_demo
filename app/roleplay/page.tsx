const page = () => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="font-electrolize mt-5 text-5xl font-extrabold">
        <span>Roleplay</span>
      </h1>
      <p className="font-squada pt-5 ml-10 mr-5">
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
      <div className="items-center">
        <button className="text-white font-bold py-2 px-4 rounded font-electrolize mt-5 but">
          Generate Roleplay
        </button>
      </div>
    </section>
  );
};

export default page;
