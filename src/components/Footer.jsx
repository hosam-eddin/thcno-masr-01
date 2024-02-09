const Footer = ({ onRectangleImageClick }) => {
  return (
    <footer className=" self-stretch bg-white shadow-[0px_-45px_13px_rgba(0,_0,_0,_0),_0px_-29px_12px_rgba(0,_0,_0,_0.01),_0px_-16px_10px_rgba(0,_0,_0,_0.05),_0px_-7px_7px_rgba(0,_0,_0,_0.09),_0px_-2px_4px_rgba(0,_0,_0,_0.1)] flex flex-col items-center justify-start pt-10 px-10 pb-[59px] box-border gap-[32px] max-w-full mq450:gap-[32px]">
      <div className="w-[1440px] h-[350px] relative bg-white hidden max-w-full" />
      <img
        className="w-[227px] h-[66px] relative object-cover cursor-pointer z-[2]"
        loading="eager"
        alt=""
        src="/rectangle-1@2x.png"
        onClick={onRectangleImageClick}
      />
      <div className="w-60 flex flex-col items-center justify-start gap-[4px]">
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-2.5 gap-[10px] z-[1]">
          <img className="h-5 w-7 relative" alt="" src="/vectoricon.svg" />
          <div
            className="w-[calc(100%_-_48px)] [border:none] [outline:none] font-light font-rubik text-4xl bg-[transparent] h-[27px] flex-1 relative text-pri text-left inline-block min-w-[109px] whitespace-nowrap mq450:text-lg"
          >
            email@gmail.com
          </div>
        </div>
        <div className="[border:none] p-2.5 bg-white flex flex-row items-start justify-start gap-[10px] whitespace-nowrap z-[1]">
          <img
            className="h-7 w-7 relative object-contain min-h-[28px]"
            alt=""
            src="/vector-1.svg"
          />
          <div className="h-[27px] relative text-4xl font-light font-rubik text-pri text-left inline-block">
            +125 699 9171
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-row items-start justify-start gap-[24px] z-[1]">
        <img
          className="self-stretch w-[27.1px] relative max-h-full min-h-[22px]"
          alt=""
          src="/vector-2.svg"
        />
        <img
          className="h-[22px] w-[22.1px] relative min-h-[22px]"
          alt=""
          src="/vector-3.svg"
        />
        <img
          className="h-[22px] w-[22px] relative min-h-[22px]"
          alt=""
          src="/vector-4.svg"
        />
      </div>
    </footer>
  );
};

export default Footer;
