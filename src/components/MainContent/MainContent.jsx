import InfoBanner from "./InfoBanner";
import FileUploadSection from "./FileUploadSection";
import FileList from "./FileList";
import ActionButtons from "./ActionButtons";

const MainContent = () => {
  return (
    <section className="flex-1 h-screen mx-auto bg-section-bg  text-white relative">
      <img
        src="/images/pattern.png"
        alt="pattern"
        className="w-full h-full absolute inset-0 object-cover opacity-5 z-0 " // Full opacity for testing
      />
      <div className="relative z-10 p-6  h-screen flex flex-col justify-between">
        <div className="mx-auto w-full max-w-4xl ">
          <InfoBanner />
          <FileUploadSection />
          <FileList />
          <ActionButtons />
        </div>
      </div>
    </section>
  );
};

export default MainContent;
