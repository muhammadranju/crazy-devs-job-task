import { MdInfo } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import CustomButton from "../Button/CustomButton";

const ActionButtons = () => {
  return (
    <div className="flex items-center justify-center gap-x-2 mt-10">
      <CustomButton className="border border-accent-orange  p-4 px-24 font-semibold">
        Start
      </CustomButton>
      <span className="text-white px-5 font-semibold">or</span>
      <CustomButton className="border border-gradient-end border-white/30 p-4 px-5 font-semibold bg-gradient-to-t from-gradient-start to-gradient-end">
        <img src="/images/deep-dive.png" alt="" /> Start with Deep Dive
      </CustomButton>
      <MdInfo
        className="text-white cursor-pointer"
        data-tooltip-id="my-tooltip"
        data-tooltip-content={`Deep Dive processes documents section by section for "unlimited" context, enabling complete answers. Run once per chat to unlock Table AI and Prompt Loops`}
      />
      <Tooltip id="my-tooltip" style={{ width: "200px" }} />
    </div>
  );
};

export default ActionButtons;
