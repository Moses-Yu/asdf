
import React from 'react';
import { LIBRARY_POSTS } from '../constants';

export const HealthLibrary: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Health Library</h2>
          <p className="text-3xl font-bold text-slate-900">지식으로 채우는 건강한 삶</p>
        </div>
        <button className="text-blue-600 font-bold hover:underline">모든 게시물 보기</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {LIBRARY_POSTS.map((post) => (
          <div key={post.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl aspect-[16/10] mb-6">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold text-slate-800 uppercase tracking-widest">
                {post.category}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs text-slate-400 font-medium">{post.date}</span>
              <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
