import React from "react";

const Header = ({ title1, title2 }) => {
  return (
    <div className="flex bg-neutral-600 text-white py-5 justify-between px-4 pt-4">
      <h2>{title1}</h2>
      <h2>{title2}</h2>
    </div>
  );
};

export default Header;
