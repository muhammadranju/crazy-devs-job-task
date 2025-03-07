import { IoSettingsOutline } from "react-icons/io5";
import CustomButton from "../Button/CustomButton";

const SidebarNav = () => {
  return (
    <nav className="space-y-4 pb-4">
      <div className="flex flex-col bg-secondary-bg p-3 px-4 rounded-2xl">
        <h4 className="font-semibold text-base">Upgrade to premium</h4>
        <p className="text-xs text-white/30">Make the most for all features!</p>
        <CustomButton className="border border-accent-orange w-full mt-2 font-semibold">
          Upgrade plan
        </CustomButton>
      </div>
      <div className="flex items-center gap-x-3">
        <img src="/images/icon.png" alt="icon" className="w-9" />
        <p>Flow AI Templates</p>
      </div>
      <div className="flex justify-between items-center gap-x-2">
        <div className="flex items-center gap-x-2">
          <img src="/images/image.png" alt="icon" className="w-10" />
          <p>Jessica Mills</p>
        </div>
        <IoSettingsOutline className="text-2xl cursor-pointer text-white/40" />
      </div>
    </nav>
  );
};

export default SidebarNav;
