import React from "react";
import { IoClose } from "react-icons/io5";
import { MdInfo } from "react-icons/md";

const FileTag = ({ filename, iconSrc, checkboxSrc, showOCR = true }) => {
  return (
    <span className="flex items-center gap-x-3 p-2 px-4 text-sm bg-[#2B2B2B] rounded-full relative">
      <img src={iconSrc} alt="" />
      <p>{filename}</p>
      <img src={checkboxSrc} className="w-5" alt="" />
      {showOCR && <p className="text-white/60">Force OCR</p>}
      <MdInfo className="text-white/20 text-xl" />
      <IoClose className="text-white/70" />
    </span>
  );
};

export default FileTag;
