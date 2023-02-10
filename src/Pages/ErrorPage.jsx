import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white text-center">
      <div>
        <h1 className="text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">404</h1>
        <p className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Page Not Found</p>
      </div>
    </div>
  );
};

export default ErrorPage;
