
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ShieldCheck, Cpu, Zap, Cloud } from 'lucide-react';

const data = [
  { name: '2020', accuracy: 82, intelligence: 45 },
  { name: '2021', accuracy: 88, intelligence: 58 },
  { name: '2022', accuracy: 94, intelligence: 72 },
  { name: '2023', accuracy: 97, intelligence: 89 },
  { name: '2024', accuracy: 98.2, intelligence: 95 },
];

export const Technology: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Innovation & Tech</h2>
          <p className="text-4xl font-bold text-white mb-8 leading-tight">
            압도적인 AI 기술로 <br />
            데이터의 미래를 엽니다.
          </p>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 border border-blue-600/30">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Advanced AI Algorithm</h4>
                <p className="text-slate-400 text-sm">자체 개발한 딥러닝 아키텍처를 기반으로 질병 예측 및 건강 지표 분석을 수행합니다.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 border border-blue-600/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Uncompromising Security</h4>
                <p className="text-slate-400 text-sm">HIPAA, GDPR 등 글로벌 데이터 보안 표준을 준수하며 모든 정보는 철저히 암호화됩니다.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 border border-blue-600/30">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Real-time Processing</h4>
                <p className="text-slate-400 text-sm">초당 수만 건의 헬스 로그를 지연 없이 처리하여 즉각적인 피드백을 제공합니다.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 p-8 rounded-3xl border border-white/5 shadow-2xl backdrop-blur-sm">
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-white font-bold">Model Intelligence Growth</h4>
            <div className="flex gap-4 text-[10px] text-slate-400 uppercase tracking-wider">
               <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Accuracy</div>
               <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-indigo-400"></span> Intelligence</div>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorAcc" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="accuracy" stroke="#3b82f6" fillOpacity={1} fill="url(#colorAcc)" strokeWidth={3} />
                <Area type="monotone" dataKey="intelligence" stroke="#818cf8" fillOpacity={0} strokeWidth={2} strokeDasharray="5 5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 flex justify-between items-center px-4">
              <div className="text-slate-400 text-xs flex items-center gap-2">
                <Cloud className="w-4 h-4" /> Global Node Status: <span className="text-green-400">Optimal</span>
              </div>
              <div className="px-3 py-1 bg-white/10 rounded-full text-[10px] text-white">LIVE DATA FEED</div>
          </div>
        </div>
      </div>
    </div>
  );
};
