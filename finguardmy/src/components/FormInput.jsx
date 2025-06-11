// FormInput.jsx
import React from 'react';

const FormInput = ({ type, placeholder, value, onChange, icon: Icon, children, ...props }) => {
  const basePaddingLeft = Icon ? 'pl-12' : 'pl-4'; // Default padding if no icon
  const basePaddingRight = children ? 'pr-12' : 'pr-4'; // Adjust padding right if children are present

  return (
    <div className="w-full max-w-md">
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full ${basePaddingLeft} ${basePaddingRight} py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 bg-gray-50`}
          {...props} // Pass any other props like 'required'
        />
        {children} {/* This is where the Eye/EyeOff button for password will go */}
      </div>
    </div>
  );
};

export default FormInput;