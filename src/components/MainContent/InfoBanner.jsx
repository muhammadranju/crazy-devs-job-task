import { MdInfoOutline } from "react-icons/md";

const InfoBanner = () => {
  return (
    <p className="flex lg:flex-row flex-col items-center justify-center lg:gap-x-2 bg-main-bg rounded-full p-3 lg:px-4  mt-8 text-sm text-center lg:w-fit lg:ml-28">
      <MdInfoOutline className="text-accent-orange text-2xl" />
      The web version does not display local chats. To access all features,
      please{""}
      <span className="text-accent-orange font-semibold">install the app</span>
    </p>
  );
};

export default InfoBanner;
