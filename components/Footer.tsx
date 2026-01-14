
import React from 'react';
import { Twitter, Linkedin, Facebook, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center transform rotate-45">
              <div className="w-3 h-3 bg-white rounded-full transform -rotate-45" />
            </div>
            <span className="text-xl font-bold text-white tracking-tighter">DELTOID</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Health Intelligence for the Future.<br />
            데이터로 그리는 인류 건강의 미래.
          </p>
          <div className="flex gap-4">
            <Twitter className="w-5 h-5 cursor-pointer hover:text-white" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-white" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-white" />
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Solutions</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white">Health Engine</a></li>
            <li><a href="#" className="hover:text-white">Data Hub</a></li>
            <li><a href="#" className="hover:text-white">Insight Lab</a></li>
            <li><a href="#" className="hover:text-white">Security Specs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Press Kit</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <p className="text-sm mb-4">info@deltoid.ai</p>
          <p className="text-sm mb-4">+82 (02) 1234-5678</p>
          <p className="text-sm">서울특별시 강남구 테헤란로 델토이드 타워</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-medium">
        <p>© 2024 DELTOID AI Co., Ltd. All rights reserved.</p>
        <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};
