import React from 'react';
import { Scale, Shield, Bot } from 'lucide-react';

const LoginBranding = () => {
  return (
    <div className="flex-1 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-12 flex flex-col justify-between relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-32 right-8 w-24 h-24 bg-cyan-200 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-200 rounded-full"></div>
      </div>

      {/* Abstract Shape */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/3">
        <div className="w-80 h-80 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full opacity-20"></div>
      </div>

      {/* Logo and Brand */}
      <div className="relative z-10">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
            <Scale className="w-6 h-6 text-white" />
          </div>
          <span className="text-white text-2xl font-bold">FinGuardMY</span>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-white leading-tight">
            Hey<br />
            Welcome To<br />
            FinGuard AI
          </h1>

          <div className="flex items-center space-x-3 text-white/90">
            <Bot className="w-5 h-5" />
            <span className="text-lg">AI-Powered Financial Crime Analysis</span>
          </div>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="relative z-10 space-y-4">
        <div className="flex items-center text-white/80">
          <Shield className="w-5 h-5 mr-3" />
          <span>Advanced Security & Compliance</span>
        </div>
        <div className="flex items-center text-white/80">
          <Scale className="w-5 h-5 mr-3" />
          <span>Real-time Risk Assessment</span>
        </div>
      </div>
    </div>
  );
};

export default LoginBranding;