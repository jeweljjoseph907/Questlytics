import { useState } from 'react';
import { Menu, X, Github } from 'lucide-react';
import '../src/App.css';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="flex justify-between items-center px-4 py-6">
        <h1 className="text-4xl font-semibold cursor-pointer select-none">Questlytics</h1>

        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="w-10 h-10 cursor-pointer select-none" />
          ) : (
            <Menu className="w-10 h-10 cursor-pointer select-none" />
          )}
        </div>
      </div>

      <div className={`overflow-hidden transition-all duration-500 md:hidden ${isMenuOpen ? 'max-h-[300px] py-4 px-4' : 'max-h-0 py-0 px-4'}`}>
        <div className="space-y-4 flex flex-col items-center">
          <p className="cursor-pointer mt-[1vh] underline underline-offset-4 decoration-1 font-medium">
            Overview
          </p>
          <a
            href="https://github.com/NivinLouis/Questlytics"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-0.5 font-medium cursor-pointer hover:underline"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>

          <a href='' className="w-full"><button className="w-full bg-[#0F172A] text-white py-2 rounded-md hover:bg-white hover:text-[#0F172A] hover:border hover:border-[#0F172A] transition duration-300">
            Try Now
          </button></a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
