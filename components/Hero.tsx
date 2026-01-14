
import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Background Visualization Simulation */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-600/30 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-yellow-500/20 rounded-full blur-[140px] animate-pulse delay-700" />
        
        {/* Animated Grid Dots */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32 md:pb-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-900/30 border border-yellow-500/30 text-yellow-200 text-xs font-bold mb-8 backdrop-blur-sm animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            HEALTH INTELLIGENCE FOR THE FUTURE
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            당신의 건강 데이터, <br />
            <span className="text-yellow-400">더 똑똑하게.</span>
          </h1>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl">
            미래를 읽는 헬스 인텔리전스 – DELTOID.<br />
            우리는 복잡한 의료 데이터를 가치 있는 통찰로 바꾸어,<br />
            개인과 인류의 더 건강한 내일을 설계합니다.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16">
            <button className="px-8 py-4 bg-yellow-500 text-slate-900 rounded-full font-bold flex items-center gap-2 hover:bg-yellow-400 transition-all hover:scale-105 shadow-lg shadow-yellow-500/20">
              솔루션 보기
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-all">
              회사 소개 보기
            </button>
          </div>
        </div>
      </div>

      {/* Floating UI Elements Mockup */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block w-1/3 pr-10 opacity-80">
        <div className="glass p-8 rounded-3xl border border-white/10 rotate-[-5deg] translate-y-20 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Deltoid Health Engine</span>
                <span className="text-yellow-600 font-bold">Predictive</span>
            </div>
            <div className="space-y-4">
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-yellow-500 rounded-full" />
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-yellow-400 rounded-full" />
                </div>
            </div>
            <div className="mt-8 flex justify-around">
                <div className="text-center">
                    <div className="text-2xl font-bold text-slate-800">98.2%</div>
                    <div className="text-[10px] text-slate-400">Accuracy</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-slate-800">12ms</div>
                    <div className="text-[10px] text-slate-400">Latency</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
