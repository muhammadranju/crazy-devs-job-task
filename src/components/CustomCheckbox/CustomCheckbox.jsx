import { useState } from "react";

const CustomCheckbox = ({ checked }) => {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <span
        className={`w-5 h-5 bg-section-bg border-2 border-border-color rounded-md flex items-center justify-center
            ${isChecked ? "bg-blue-500 border-blue-500" : ""} 
            transition-all duration-200 relative`}
      >
        <span
          className={`absolute text-white/60 mt-[2px] text-xl font-bold 
              ${isChecked ? "block" : "hidden"}`}
        >
          ×
        </span>
      </span>
    </label>
  );
};

export default CustomCheckbox;
