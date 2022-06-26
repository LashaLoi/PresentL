import React from "react";

import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="fixed top-0 w-full z-50 h-20 backdrop-blur-md bg-white/30">
      <div className="flex justify-between w-full items-center px-10 h-full">
        <h1 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 cursor-pointer">
          PresentL
        </h1>

        <Link href="/share">
          <div className="text-blue-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
