const CustomButton = ({ children, className, icon, ...props }) => {
  return (
    <button
      className={`flex items-center justify-center gap-x-2 rounded-full p-2 font-medium ${className}`}
      {...props}
    >
      {icon && <span className="text-xl">{icon}</span>}
      {children}
    </button>
  );
};

export default CustomButton;
