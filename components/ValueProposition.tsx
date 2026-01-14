
import React from 'react';
import { VALUES } from '../constants';

export const ValueProposition: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Core Values</h2>
        <p className="text-3xl md:text-4xl font-bold text-slate-900">델토이드가 지향하는 가치</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {VALUES.map((value, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
              {value.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
