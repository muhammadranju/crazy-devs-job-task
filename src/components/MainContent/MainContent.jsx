import InfoBanner from "./InfoBanner";
import FileUploadSection from "./FileUploadSection";
import FileList from "./FileList";
import ActionButtons from "./ActionButtons";

const MainContent = () => {
  return (
    <section className="flex-1 mx-auto bg-main-bg  text-white relative pr-5 my-5">
      <div className="relative z-10 flex flex-col justify-between pb-[2px] bg-section-bg p-5 rounded-2xl">
        <img
          src="/images/pattern.png"
          alt="pattern"
          className="w-full h-full absolute inset-0 object-cover opacity-5 z-0 "
        />
        <div className="relative  pb-9">
          <div className="mx-auto max-w-4xl z-50 relative">
            <InfoBanner />
            <FileUploadSection />
            <FileList />
            <ActionButtons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
