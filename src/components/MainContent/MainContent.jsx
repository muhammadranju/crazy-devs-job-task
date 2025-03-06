import InfoBanner from "./InfoBanner";
import FileUploadSection from "./FileUploadSection";
import FileList from "./FileList";
import ActionButtons from "./ActionButtons";

const MainContent = () => {
  return (
    <section className="flex-1 h-screen mx-auto bg-main-bg text-white">
      <div className="p-6 bg-section-bg h-screen flex flex-col justify-between">
        <div className="mx-auto w-full max-w-4xl">
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
