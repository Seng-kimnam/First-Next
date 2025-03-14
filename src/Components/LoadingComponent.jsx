import React from "react";

const LoadingComponent = () => {
  return (
    <div className="text-4xl font-bold flex justify-center items-center h-screen">
      Loading
      <span className="ml-4 w-10 h-10 rounded-full border-4 border-orange-500 border-y-transparent animate-spin"></span>
    </div>
  );
};

export default LoadingComponent;
