import "./Preloader.css";

export const Preloader = () => {
  return (
    <div className="fixed top-0 min-h-[100vh] w-full flex justify-center items-center bg-white z-20">
      <div className="custom-loader"></div>
    </div>
  );
};
