import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import LoginBranding from './LoginBranding';
import FormInput from './FormInput';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      alert(`Login attempted with email: ${email}`);
    }, 2000);
  };

  return (
    <div className="select-none fixed inset-0 bg-gradient-to-br from-blue-100 via-sky-50 to-cyan-100 flex items-center justify-center overflow-hidden">
      <div className={`w-full h-full flex ${isMobile ? 'items-center justify-center' : 'flex-row'}`}>
        {!isMobile && <LoginBranding className="md:w-3/5 h-full" />}

        {/* Login Form */}
        <div className={`${isMobile ? 'w-full max-w-md' : 'md:w-2/5'} p-2 sm:p-4 flex flex-col justify-center`} style={{ borderTopLeftRadius: '100px', borderBottomRightRadius: '100px' }}>
          <div className="max-w-sm mx-auto w-full">
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-4xl sm:text-4xl font-extrabold text-gray-800 mb-1 sm:mb-2">Login</h2>
              <p className="text-gray-600 text-sm">Access your financial crime analysis dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
              <FormInput
                type="text"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                icon={User}
                required
                autoComplete="off"
              />

              <FormInput
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                icon={Lock}
                required
                autoComplete="off"
              >
                <div 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </div>
              </FormInput>

              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-500">
                  Need access? Contact admin
                </span>
                <span 
                  onClick={() => {}} 
                  className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
                >
                  Forgot Password?
                </span>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white font-semibold py-2 sm:py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-1"></div>
                    Logging in...
                  </div>
                ) : (
                  "LOGIN"
                )}
              </button>
            </form>

            <div className="text-center mt-4 sm:mt-6 pt-2 sm:pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                If you are having trouble please contact
              </p>
              <p className="text-xs text-blue-600 font-medium mt-1">
                support@finguardmy.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
