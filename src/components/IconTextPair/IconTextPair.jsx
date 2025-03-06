import React from "react";

const IconTextPair = ({ iconSrc, text, className }) => {
  return (
    <div className={`flex items-center gap-x-5 ${className}`}>
      <img src={iconSrc} className="w-10" alt="" />
      <p>{text}</p>
    </div>
  );
};

export default IconTextPair;
