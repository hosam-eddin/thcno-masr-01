import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CheckOut = ({onCheckOutClick}) => {
  const { getTotalCartAmount, getTotalCartAmountFinal, taxRate } =
    useContext(CartContext);
  const tax = taxRate * getTotalCartAmount();
  return (
    <div className="w-[449px] rounded-lg bg-white box-border flex flex-col items-center justify-start pt-8 pb-[152px] pr-[67px] pl-[38px] gap-[36px] sm:mx-auto max-w-full border border-solid border-darkgray ">
      <div className="w-[449px] h-[576px] relative rounded-lg bg-white box-border hidden max-w-full border-[1px] border-solid border-darkgray" />
      <div className="flex flex-row items-start justify-start py-0 pr-0 pl-7">
        <b className="relative z-[1]">Order Summary</b>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-7 gap-[24px] text-text">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
          <div className="h-7 relative inline-block z-[1]">Cart total</div>
          <div className="relative text-right whitespace-nowrap z-[1]">
            {getTotalCartAmount()} $
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <div className="h-7 relative inline-block z-[1]">Tax</div>
            <div className="relative z-[1]">Delivery</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[24px] text-right">
            <div className="relative whitespace-nowrap z-[1]">
              {tax.toFixed(2)} $
            </div>
            <div className="relative whitespace-nowrap z-[1] w-full me-0">
              16 $
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative bg-text box-border z-[1] border-t-[1px] border-solid border-gray" />
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
          <div className="h-7 relative inline-block z-[1]">Total</div>
          <b className="relative text-pri text-right whitespace-nowrap z-[1]">
            {getTotalCartAmountFinal()} $
          </b>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[22px] pl-[50px] mq450:pl-5 mq450:box-border">
        <button className="cursor-pointer [border:none] p-[11px] bg-darkorange flex-1 rounded-lg overflow-hidden flex flex-row items-center justify-center whitespace-nowrap z-[1] hover:bg-chocolate" onClick={onCheckOutClick}>
          <div className="h-[34px] relative text-9xl font-medium font-lato text-white text-left inline-block">
            Check out
          </div>
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
