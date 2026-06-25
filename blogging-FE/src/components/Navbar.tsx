import { useState } from "react";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-between px-[200px] py-5 border-b">
      <h1 className="text-4xl font-extrabold">Quill</h1>

      <button
        onClick={() => setIsOpen(true)}
        className="w-fit bg-[#1a1a1a] text-[#F2EFE7] px-8 py-3 rounded-full text-[15px] font-medium tracking-wide hover:opacity-80 transition-opacity cursor-pointer"
      >
        Start reading
      </button>

      <AuthModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Navbar;
