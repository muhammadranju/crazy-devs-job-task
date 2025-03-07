import { MdInfoOutline } from "react-icons/md";

const InfoBanner = () => {
  return (
    <p className="flex items-center justify-center gap-x-2 bg-main-bg rounded-full p-3 px-4 f mt-8 text-sm text-center w-fit ml-16">
      <MdInfoOutline className="text-accent-orange text-2xl" />
      The web version does not display local chats. To access all features,
      please{""}
      <span className="text-accent-orange font-semibold">install the app</span>
    </p>
  );
};

export default InfoBanner;
