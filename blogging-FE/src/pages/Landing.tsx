import Navbar from "../components/Navbar";
import heroImage from "../assets/hero.png";
import { useState } from "react";
import AuthModal from "../components/AuthModal";

const Landing = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 relative flex items-center justify-center">
        {/* Background image */}
        <img
          src={heroImage}
          alt=""
          className="absolute right-32 top-1/2 -translate-y-1/2 w-[560px] h-[560px] object-contain opacity-20 pointer-events-none select-none"
        />

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-4xl px-8">
          <h1 className="text-[110px] leading-none font-bold tracking-[-4px] text-[#1a1a1a]">
            Ideas worth
            <br />
            reading.
          </h1>

          <p className="text-[17px] leading-[1.7] text-[#555] max-w-[480px]">
            A place where writers share what they know, and readers discover
            what they didn't.
          </p>

          <button
            onClick={() => setIsOpen(true)}
            className="w-fit bg-[#1a1a1a] text-[#F2EFE7] px-8 py-3 rounded-full text-[15px] font-medium tracking-wide hover:opacity-80 transition-opacity cursor-pointer"
          >
            Start reading
          </button>
        </div>
      </main>

      <footer className="flex items-center justify-between px-[200px] py-5 border-t">
        <p>Quill</p>
      </footer>

      <AuthModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Landing;
