import { IoClose } from "react-icons/io5";
import { MdInfo } from "react-icons/md";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";

const FileTag = ({ filename, iconSrc, checked, showOCR = true }) => {
  return (
    <span className="flex items-center gap-x-3 p-2 px-4  text-sm bg-[#2B2B2B] rounded-full relative">
      <img src={iconSrc} alt="" />
      <p>{filename}</p>

      <CustomCheckbox checked={checked} />
      {showOCR && <p className="text-white/60">Force OCR</p>}
      <MdInfo className="text-white/20 text-xl cursor-pointer" />
      <IoClose className="text-white/70 cursor-pointer" />
    </span>
  );
};

export default FileTag;
