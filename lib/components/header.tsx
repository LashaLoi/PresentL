import React from "react";

const Header: React.FC = () => {
  return (
    <div className="fixed top-0 w-full z-50 h-20 backdrop-blur-md bg-white/30">
      <div className="flex justify-start w-full items-center px-10 h-full">
        <h1 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 cursor-pointer">
          PresentL
        </h1>
      </div>
    </div>
  );
};

export default Header;
