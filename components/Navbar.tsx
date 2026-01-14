
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transform rotate-45">
            <div className="w-4 h-4 bg-white rounded-full transform -rotate-45" />
          </div>
          <span className={`text-2xl font-bold tracking-tighter ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>DELTOID</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Vision', 'Solutions', 'Technology', 'Library'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${scrolled ? 'text-slate-600' : 'text-slate-100'}`}
            >
              {item}
            </a>
          ))}
          <button className="px-6 py-2.5 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
            Contact Us
          </button>
        </div>

        {/* Mobile menu icon placeholder */}
        <div className="md:hidden flex items-center">
            <button className={`${scrolled ? 'text-slate-900' : 'text-white'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </div>
      </div>
    </nav>
  );
};
