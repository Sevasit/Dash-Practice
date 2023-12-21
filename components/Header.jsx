import React from "react";

const Header = ({ title1, title2 }) => {
  return (
    <div className="flex bg-[#f0f4f2] text-white py-5 justify-between px-4 pt-4">
      <h2 className=" text-black">{title1}</h2>
      <h2 className=" text-black">{title2}</h2>
    </div>
  );
};

export default Header;
