import React from "react";

function Header() {
  return (
    <div className="border-none h-12 rounded-t-xl gap-2 bg-white min-w-[800px] w-full max-w-[1770px] flex items-center justify-center px-2">
      <p className="font-semibold w-[400px] ml-auto">
        Quantum Computer Doom Challenge
      </p>
      <div className="flex items-center gap-2 ml-auto">
        <div className="border rounded-[10px] h-10 w-10"></div>
        <div className="bg-[#448896] border-none rounded-[10px] h-10 w-10"></div>
        <div className="bg-[#448896] border-none rounded-[10px] h-10 w-24 text-white font-semibold p-2">
          Share
        </div>
      </div>
    </div>
  );
}

export default Header;