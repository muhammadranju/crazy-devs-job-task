import { LuSearch } from "react-icons/lu";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import CustomButton from "../Button/CustomButton";
import { GoPlus } from "react-icons/go";

const SidebarHeader = () => {
  return (
    <div className="flex flex-col items-center justify-between space-y-4">
      <div className="flex items-center justify-between gap-x-6 w-full">
        <img src="/images/logo.png" alt="logo" />
        <div className="flex items-center gap-x-2">
          <LuSearch className="text-2xl cursor-pointer text-white/50" />
          <TbLayoutSidebarRightExpand className="text-2xl cursor-pointer text-white/40" />
        </div>
      </div>
      <div className="w-full space-y-4">
        <CustomButton
          icon={<GoPlus />}
          className="border border-white/20 w-full"
        >
          Add folder
        </CustomButton>
        <CustomButton icon={<GoPlus />} className="bg-button-bg w-full">
          Create chat
        </CustomButton>
      </div>
    </div>
  );
};

export default SidebarHeader;
