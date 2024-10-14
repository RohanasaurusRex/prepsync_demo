const Footer = () => {
  return (
    <footer className="bg-gray-850 text-gray-300 py-6 mt-10 border-t border-gray-700">
      {" "}
      {/* Add a top border for separation */}
      <div className="container mx-auto text-center">
        <p className="text-sm">
          {" "}
          {/* Smaller text for a footer feel */}
          &copy; {new Date().getFullYear()} Prep Sync AI. All rights reserved.
        </p>
        <p className="pt-2 text-xs">
          {" "}
          {/* Even smaller text for disclaimer */}
          This is in no way associated with DECA Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
