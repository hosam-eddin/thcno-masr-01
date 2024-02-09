import React from "react";

const HeroFooter = () => {
  return (
    <section className="box-border text-4xl text-white font-lato bg-pri">
      <div className="grid grid-cols-2 sm:grid-cols-4 space-y-5 sm:space-y-0 py-8 gap-[20px] mx-auto container">
        <div className="flex flex-row items-start justify-start gap-[15px]">
          <img
            className="self-stretch w-[38.2px] relative max-h-full min-h-[30px] z-[1]"
            loading="eager"
            alt=""
            src="/group-6976.svg"
          />
          <div className="relative font-medium z-[1]">
            lorem ipsum
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[19px]">
          <img
            className="h-[30px] w-[34.1px] relative min-h-[30px] z-[1]"
            loading="eager"
            alt=""
            src="/group.svg"
          />
          <div className="relative font-medium z-[1]">
            lorem ipsum
          </div>
        </div>
        <div className="h-[31px] flex flex-row items-end justify-end  gap-[19px]">
          <img
            className="h-[30px] w-[33.8px] relative z-[1]"
            alt=""
            src="/group-1.svg"
          />
          <div className="relative font-medium z-[1]">
            lorem ipsum
          </div>
        </div>
        <div className="flex flex-row items-end justify-end  gap-[20px]">
          <div className="h-8 w-8 relative z-[1]">
            <div className="absolute top-[7px] left-[8px] bg-darkorange w-[17px] h-[18px]" />
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full z-[1]"
              alt=""
              src="/vector-21.svg"
            />
          </div>
          <div className="relative font-medium z-[1]">
            lorem ipsum
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFooter;
