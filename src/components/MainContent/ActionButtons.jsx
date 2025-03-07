import { MdInfo } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import CustomButton from "../Button/CustomButton";

const ActionButtons = () => {
  return (
    <div className="flex items-center justify-center gap-x-2 mt-14 py-2">
      <CustomButton className="border border-accent-orange  w-60 h-[60px] text-base  font-semibold">
        Start
      </CustomButton>
      <span className="text-white text-base px-2 font-semibold">or</span>
      <CustomButton className="border  border-white/30 w-60 h-[60px] font-semibold bg-gradient-to-t from-gradient-start to-gradient-end text-base">
        <img src="/images/deep-dive.png" alt="" /> Start with Deep Dive
      </CustomButton>
      <MdInfo
        className="text-white cursor-pointer text-xl"
        data-tooltip-id="my-tooltip"
        data-tooltip-content={`Deep Dive processes documents section by section for "unlimited" context, enabling complete answers. Run once per chat to unlock Table AI and Prompt Loops`}
      />
      <Tooltip
        id="my-tooltip"
        style={{
          width: "270px",
          height: "130px",
          borderRadius: "25px",
        }}
      />
    </div>
  );
};

export default ActionButtons;
