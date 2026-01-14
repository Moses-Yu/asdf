
import React from 'react';
import { PARTNERS } from '../constants';

export const Partners: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 text-center">
      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">Trusted by World-Class Institutions</p>
      <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-50 grayscale hover:grayscale-0 transition-all">
        {PARTNERS.map((partner, index) => (
          <span key={index} className="text-xl md:text-2xl font-bold text-slate-800 tracking-tighter">
            {partner}
          </span>
        ))}
      </div>
    </div>
  );
};
