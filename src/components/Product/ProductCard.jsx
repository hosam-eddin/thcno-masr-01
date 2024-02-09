import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { id, price, productName, image, inStock } = props.data;
  const { cartItems, addToCart } = useContext(CartContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="shadow-md rounded-lg">
      <div className="self-stretch flex flex-row items-start justify-end pt-2 px-[9px] pb-[166px] relative">
        <Link className="no-underline" to={`/${id}/ProductDetails`}>
          <img
            className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-t-lg rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={image}
          />
          {/* //#dynamic */}
        </Link>
        <div className="flex flex-row justify-between items-center w-full">
          {!inStock && (
            <div className="cursor-pointer rounded-xl hover:bg-whitesmoke-200 transition-all duration-300 bg-white shadow-[0px_21px_6px_rgba(0,_0,_0,_0),_0px_14px_5px_rgba(0,_0,_0,_0.01),_0px_8px_5px_rgba(0,_0,_0,_0.05),_0px_3px_3px_rgba(0,_0,_0,_0.09),_0px_1px_2px_rgba(0,_0,_0,_0.1)] flex flex-col items-start justify-start p-2 z-[2] text-red-700">
              Out
            </div>
          )}

          <button className="cursor-pointer rounded-xl hover:bg-whitesmoke-200 transition-all duration-300 bg-white shadow-[0px_21px_6px_rgba(0,_0,_0,_0),_0px_14px_5px_rgba(0,_0,_0,_0.01),_0px_8px_5px_rgba(0,_0,_0,_0.05),_0px_3px_3px_rgba(0,_0,_0,_0.09),_0px_1px_2px_rgba(0,_0,_0,_0.1)] flex flex-col items-start justify-start p-2 z-[2] ms-auto">
            <img className="w-[23.2px] h-5" alt="" src="/vector-31.svg"  />
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start relative">
        <div className="flex-1 rounded-t-none rounded-b-lg bg-whitesmoke-200 flex flex-col items-center justify-start pt-2 px-2 pb-4 gap-[8px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-2">
            <div className="h-7 relative font-semibold inline-block z-[2] ">
              {productName}
            </div>
            {/* //#dynamic */}
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-2 gap-[14px] text-pri">
            <b className="relative whitespace-nowrap z-[2] ">{price} $</b>
            {/* //#dynamic */}
            <div className="self-stretch flex flex-row items-start justify-end">
              <button
                className={`w-[104px] rounded-lg transition-all duration-300 flex flex-row items-center justify-center p-1 box-border z-[2] cursor-pointer ${
                  !inStock ? "bg-gray" : "bg-darkorange hover:bg-chocolate"
                }`}
                onClick={() => addToCart(id)}
                disabled={!inStock}
              >
                <div className="h-8 w-[74px] relative">
                  <img className="w-fit" alt="" src="/vector-41.svg" />
                  <img
                    className="absolute top-[26.2px] left-[26.3px] w-[21.3px] h-[5.3px]"
                    alt=""
                    src="/vector-5.svg"
                  />
                </div>
                {cartItemAmount > 0 && (
                  <div className=" bg-white p-1 rounded-md text-green-800 font-bold">
                    {cartItemAmount > 0 && <> {cartItemAmount} </>}
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
