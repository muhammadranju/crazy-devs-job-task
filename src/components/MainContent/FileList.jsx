import FileTag from "../FileTag/FileTag";

const FileList = () => {
  return (
    <div className="w-full bg-main-bg mt-5 p-5 rounded-full flex items-center gap-x-5">
      <div className="flex items-center gap-x-5">
        <FileTag
          filename="Report_file.pdf"
          iconSrc="/images/files.png"
          checkboxSrc="/images/checkbox-2.png"
        />
        <FileTag
          filename="Report_file.pdf"
          iconSrc="/images/files1.png"
          checkboxSrc="/images/checkbox.png"
        />
      </div>
    </div>
  );
};

export default FileList;
