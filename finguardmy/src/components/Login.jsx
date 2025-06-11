import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import LoginBranding from './LoginBranding'; // Import the branding component
import FormInput from './FormInput'; // Import the reusable input component

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-50 to-cyan-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex min-h-[600px]">
          {/* Left Side - Branding Component */}
          <LoginBranding />

          {/* Right Side - Login Form */}
          <div className="flex-1 p-12 flex flex-col justify-center">
            <div className="max-w-sm mx-auto w-full">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Login</h2>
                <p className="text-gray-600">Access your financial crime analysis dashboard</p>
              </div>

              <div className="space-y-6">
                {/* Email Field */}
                <FormInput
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  icon={Mail}
                  required
                />

                {/* Password Field */}
                <FormInput
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  icon={Lock}
                  required
                >
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </FormInput>

                {/* Links */}
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">
                    Need access? Contact admin
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Forgot Password?
                  </button>
                </div>

                {/* Login Button */}
                <button
                  onClick={handleLogin}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Logging in...
                    </div>
                  ) : (
                    "LOGIN"
                  )}
                </button>
              </div>

              {/* Support Contact */}
              <div className="text-center mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  If you are having trouble please contact
                </p>
                <p className="text-sm text-blue-600 font-medium mt-1">
                  support@finguardmy.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;