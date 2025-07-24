// src/Components/Breadcrumbs.jsx

import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  let currentPath = '';

  const pathnames = location.pathname.split('/').filter(x => x);

  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav aria-label="breadcrumb" className="p-4 bg-black text-sm">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          currentPath += `/${name}`;
          const isLast = index === pathnames.length - 1;
          const displayName = name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ');

          return (
            <li key={currentPath} className="flex items-center space-x-2">
            
              <span className="text-gray-400">/</span>
              {isLast ? (
                <span className="text-gray-300 font-semibold">{displayName}</span>
              ) : (
                <Link to={currentPath} className="text-white hover:underline">
                  {displayName}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;