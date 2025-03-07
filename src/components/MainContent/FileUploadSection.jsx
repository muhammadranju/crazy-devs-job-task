import IconTextPair from "../IconTextPair/IconTextPair";
import CustomButton from "../Button/CustomButton";

const FileUploadSection = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-6xl font-medium flex items-center justify-center gap-x-3">
          Add Files to
          <img src="/images/cloud-icon.png" alt="cloud icon" className="w-24" />
          Cloud Chat
        </h1>
        <p className="text-white/60 mt-3">
          Your files will not be stored on our servers and no AI models will be
          trained.
        </p>
        <p className="text-accent-orange font-medium">
          Supported File Types: .docx, .pdf, .epub, and many text filetypes
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-16 font-semibold">
        <IconTextPair
          iconSrc="/images/icon2.png"
          text="Drag & drop local files here, or click to select"
          className="bg-main-bg p-8 px-10 rounded-2xl text-lg"
        />
        <div className="bg-main-bg p-8 px-10 rounded-2xl flex items-center gap-x-5 w-full">
          <img src="/images/url.png" className="w-10" alt="" />
          <div className="relative w-full">
            <p className="text-lg">Enter in a public URL:</p>
            <input
              type="text"
              className="p-[10px] rounded-full bg-secondary-bg w-full placeholder-white/20 placeholder:text-sm"
              placeholder="https://example.com/file.pdf"
            />
            <CustomButton className="bg-button-bg absolute right-1 bottom-1 top-7 px-4">
              Add
            </CustomButton>
          </div>
        </div>
        <IconTextPair
          iconSrc="/images/dropbox.png"
          text="Add files from Dropbox"
          className="bg-main-bg p-10 px-12 rounded-2xl text-lg"
        />
        <IconTextPair
          iconSrc="/images/google-drive.png"
          text="Add files from Google Drive"
          className="bg-main-bg p-10 px-10 rounded-2xl text-lg"
        />
      </div>
    </>
  );
};

export default FileUploadSection;
