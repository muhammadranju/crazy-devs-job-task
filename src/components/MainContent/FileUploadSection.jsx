import IconTextPair from "../IconTextPair/IconTextPair";
import CustomButton from "../Button/CustomButton";

const FileUploadSection = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-[54px] font-medium flex lg:flex-row flex-col items-center justify-center gap-x-2">
          Add Files to
          <img src="/images/cloud-icon.png" alt="cloud icon" className="w-20" />
          Cloud Chat
        </h1>
        <p className="text-white/60 text-base mt-3">
          Your files will not be stored on our servers and no AI models will be
          trained.
        </p>
        <p className="text-accent-orange text-base font-semibold ">
          Supported File Types: .docx, .pdf, .epub, and many text filetypes
        </p>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 mt-[60px] font-semibold">
        <IconTextPair
          iconSrc="/images/icon2.png"
          text="Drag & drop local files here, or click to select"
          className="bg-main-bg  w-full h-[120px] p-9 lg:pr-24 rounded-[20px] text-lg"
        />
        <div className="bg-main-bg w-full h-[120px] p-9 pr-7 rounded-[20px] flex items-center gap-x-5 ">
          <img src="/images/url.png" className="w-10" alt="" />
          <div className="relative w-full">
            <p className="text-lg font-semibold mb-2">Enter in a public URL:</p>
            <input
              type="text"
              className="p-[10px] rounded-full bg-secondary-bg w-full placeholder-white/20 placeholder:text-sm"
              placeholder="https://example.com/file.pdf"
            />
            <CustomButton className="bg-button-bg absolute right-1 bottom-1 top-10  w-[60px]  h-9 text-sm">
              Add
            </CustomButton>
          </div>
        </div>
        <IconTextPair
          iconSrc="/images/dropbox.png"
          text="Add files from Dropbox"
          className="bg-main-bg  w-full h-[120px] p-9 rounded-[20px] text-lg"
        />
        <IconTextPair
          iconSrc="/images/google-drive.png"
          text="Add files from Google Drive"
          className="bg-main-bg  w-full h-[120px] p-9 rounded-[20px] text-lg"
        />
      </div>
    </>
  );
};

export default FileUploadSection;
