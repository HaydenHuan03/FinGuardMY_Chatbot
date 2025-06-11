import React from 'react';

const FormInput = ({ type, placeholder, value, onChange, icon: Icon, children, ...props }) => {
  return (
    <div>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 bg-gray-50 ${children ? 'pr-12' : ''}`}
          {...props} // Pass any other props like 'required'
        />
        {children} {/* This is where the Eye/EyeOff button for password will go */}
      </div>
    </div>
  );
};

export default FormInput;