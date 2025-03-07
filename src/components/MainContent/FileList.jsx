import FileTag from "../FileTag/FileTag";

const FileList = () => {
  return (
    <div className=" bg-main-bg mt-5 w-full h-[62px] px-5 rounded-full flex items-center gap-x-5">
      <div className="flex items-center gap-x-5">
        <FileTag
          filename="Report_file.pdf"
          iconSrc="/images/files.png"
          checked={true}
        />
        <FileTag filename="Report_file.pdf" iconSrc="/images/files1.png" />
      </div>
    </div>
  );
};

export default FileList;
