const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Prep Sync AI. All rights reserved.
        </p>
        <p className="pt-3">This is in no way associated with DECA Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
