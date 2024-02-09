import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ProductCart = (props) => {
  const { id, price, productName, image, inStock } = props.data;
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
  } = useContext(CartContext);
  const cartItemAmount = cartItems[id];
  const setCartItemAmountToZero = (itemId) => {
    updateCartItemCount(0, itemId);
  };
  
  return (
    <div className="self-stretch rounded-lg bg-white box-border flex flex-col sm:flex-row items-center justify-between py-0 pr-[30px] pl-0 gap-[20px] max-w-full text-left text-4xl text-pri font-lato border-[1px] border-solid border-darkgray">
      <div className="flex flex-row items-start justify-start gap-[16px] w-full h-full">
        <img className="sm:w-1/3 sm:h-44 w-1/4 h-32" alt="" src={image} />
        <div className="flex flex-col sm:flex-row items-center justify-between w-full sm:h-44 h-32">
          <div className="flex flex-col items-start justify-start pt-4">
            <div className="flex flex-col items-start justify-start sm:space-y-12 space-y-2">
              <div className="max-w-[150px] sm:max-w-none">{productName}</div>
              <b className="text-center">{price} $</b>
            </div>
          </div>

          <div className="flex flex-row items-start justify-start pb-4 px-0 gap-[8px] max-w-[150px] sm:max-w-none">
            <div className="h-[34px] gap-3 mx-3 flex justify-center items-center relative rounded-sm box-border z-[3] border-[0.5px] border-solid border-pri">
              <button
                className="bg-transparent cursor-pointer"
                onClick={() => removeFromCart(id)}
              >
                <img
                  className="h-[3.5px] w-3.5 relative "
                  alt=""
                  src="/path-6.svg"
                />
              </button>
              <input
                className="h-7 relative w-[30px]"
                value={cartItemAmount}
                onChange={(e) =>
                  updateCartItemCount(Number(e.target.value), id)
                }
              />
              <button
                className="bg-transparent cursor-pointer"
                onClick={() => addToCart(id)}
              >
                <img className="" alt="" src="/combined-shape-1.svg" />
              </button>
            </div>
            <button
              className="cursor-pointer h-[34px] w-[34px] flex justify-center items-center relative rounded-sm box-border z-[3] border-[0.5px] border-solid border-pri bg-transparent"
              onClick={() => setCartItemAmountToZero(id)}
            >
              <i className="fa-solid fa-trash-can text-4xl text-pri"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
