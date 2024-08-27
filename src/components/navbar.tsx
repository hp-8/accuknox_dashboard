import React, { useState } from 'react';

const Navbar = () => {
  const [breadcrumb, setBreadcrumb] = useState(['Home', 'Dashboard']); // Example breadcrumb state

  return (
    <div className="bg-white h-16 border-b shadow-md flex items-center px-6">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center text-gray-600 space-x-2">
        {breadcrumb.map((item, index) => (
          <span key={index} className={`text-lg ${index === breadcrumb.length - 1 ? 'font-bold' : ''}`}>
            {item}
            {index < breadcrumb.length - 1 && (
              <span className="mx-2 text-gray-500">{'>'}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Navbar;