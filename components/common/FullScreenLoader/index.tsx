import React from 'react';

const FullScreenLoader = () => {
  return (
    <div className="fixed z-50 top-0 left-0 flex justify-center items-center h-screen w-screen bg-white ">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
};

export default FullScreenLoader;