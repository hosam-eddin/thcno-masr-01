import React from 'react'

const OrderDone = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start gap-[48px] tracking-[normal] text-left text-4xl text-pri font-lato ">
      <div className=" w-[675px] rounded-2xl bg-whitesmoke-200 flex flex-col items-center justify-start pt-16 px-[18px] pb-[18px] box-border gap-[16px] max-w-full m-12">
        <div className="w-[675px] h-[480px] relative rounded-2xl bg-whitesmoke-200 hidden max-w-full" />
        <b className="w-[277px] relative inline-block pl-5 pr-5 z-[1] mq450:text-lg">{`Your order is on its way `}</b>
        <div className="w-[371px] relative inline-block max-w-full pl-5 pr-5 z-[1] mq450:text-lg">
          Thank you for contacting with us
        </div>
        <img
          className="w-[310px] h-[310px] relative object-contain z-[1]"
          loading="eager"
          alt=""
          src="/rectangle-479@2x.png"
        />
      </div>
    </div>
  )
}

export default OrderDone