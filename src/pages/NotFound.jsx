
const NotFound = () => {

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start gap-[48px] tracking-[normal] text-center text-4xl text-pri font-lato mb-4">
      <div className=" w-[675px] rounded-2xl bg-whitesmoke-200 flex flex-col items-center justify-start pt-16 px-[18px] pb-[18px] box-border gap-[16px] max-w-full m-12">
        <div className="w-[675px] h-[480px] relative rounded-2xl bg-whitesmoke-200 hidden max-w-full" />

        <div className="w-[371px] relative inline-block max-w-full pl-5 pr-5 z-[1] font-bold">
          ERROR 404
        </div>
        <img
          className="w-[310px] h-[310px] relative object-contain z-[1]"
          loading="eager"
          alt="Error 404"
          src="/pixeltrue-error.png"
        />
      </div>
    </div>
  );
};

export default NotFound;
