
import React from 'react';
import { SOLUTIONS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Solutions: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Our Solutions</h2>
          <p className="text-4xl font-bold text-slate-900 leading-tight">
            의료 현장부터 일상 건강까지,<br /> 
            델토이드의 통합 솔루션
          </p>
        </div>
        <p className="text-slate-500 max-w-md pb-2">
          우리는 데이터의 수집, 정제, 분석 그리고 응용까지의 전 과정을 관통하는 고도의 헬스 엔진 기술력을 보유하고 있습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SOLUTIONS.map((item) => (
          <div key={item.id} className="relative overflow-hidden rounded-3xl group">
            <div className="absolute inset-0 bg-slate-900 transition-transform duration-500 group-hover:scale-105" />
            <div className="relative p-10 h-full flex flex-col justify-between border border-white/10">
              <div>
                <div className="mb-8 transform transition-transform group-hover:scale-110 group-hover:translate-x-1">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-10">
                  {item.description}
                </p>
              </div>
              
              <button className="flex items-center gap-2 text-white font-semibold text-sm group/btn">
                Learn More 
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
            {/* Visual Flair */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 blur-[60px] rounded-full pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
};
