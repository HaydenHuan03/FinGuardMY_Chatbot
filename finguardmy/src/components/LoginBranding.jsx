import React from 'react';
import { Scale, Shield, Bot, Lock, Activity, Zap, BotIcon, BotMessageSquare } from 'lucide-react';

const LoginBranding = () => {
  return (
    <div className="flex-auto grow bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-12 flex flex-col justify-between relative overflow-hidden" >
      <style jsx>{`
        @layer utilities {
          @keyframes float {
            0% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(10px, -15px);
            }
            100% {
              transform: translate(0, 0);
            }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-delay-1 {
            animation: float 6s ease-in-out infinite 1s;
          }
          .animate-float-delay-2 {
            animation: float 6s ease-in-out infinite 2s;
          }
          .animate-pulse-slow {
            animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        }
      `}</style>

      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-48 h-48 bg-white rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-8 w-40 h-40 bg-cyan-200 rounded-full animate-float-delay-1"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-blue-200 rounded-full animate-float-delay-2"></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-purple-200 rounded-full animate-float"></div>
      </div>

      {/* Abstract Shape */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/3">
        <div className="w-80 h-80 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full opacity-20"></div>
      </div>

      {/* Logo and Brand */}
      <div className="relative z-10">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 backdrop-blur-sm">
            <Scale className="w-6 h-6 text-white" />
          </div>
          <span className="text-white text-2xl font-bold">FinGuardMY</span>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-white leading-tight">
            Hey<br />
            Welcome To<br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">FinGuard AI</span>
          </h1>

          <div className="flex items-center space-x-3 text-white/90">
            <BotMessageSquare className="w-5 h-5" />
            <span className="text-lg">Your Financial Crime AI Assistant</span>
          </div>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="relative z-10 space-y-5 mt-20">
        <div className="flex items-center text-white/80 bg-white/5 px-4 py-2 rounded-lg max-w-[400px]">
          <Shield className="w-5 h-5 mr-3 text-cyan-300" />
          <span>Advanced Security & Compliance</span>
        </div>
        <div className="flex items-center text-white/80 bg-white/5 px-4 py-2 rounded-lg max-w-[400px]">
          <Lock className="w-5 h-5 mr-3 text-cyan-300" />
          <span>Real-time Risk Assessment</span>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 mt-auto pt-4 border-t border-white/10">
        <p className="text-white/60 text-sm">
          © 2025 FinGuardMY. All rights reserved.
        </p>
        <p className="text-white/40 text-xs mt-1">
          Powered by Hayden Huan
        </p>
      </div>
    </div>
  );
};

export default LoginBranding;