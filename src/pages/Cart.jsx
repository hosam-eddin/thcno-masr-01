import React, { useContext, useState } from "react";
import ProductCart from "../components/Product/ProductCart";
import { CartContext } from "../context/CartContext";
import { PRODUCTS } from "../productsData";
import CheckOut from "../components/CheckOut/CheckOut";
import { useNavigate } from "react-router-dom";
import PaymentData from "../components/PaymentData/PaymentData";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(CartContext);
  const totalAmount = getTotalCartAmount();

  const [showPaymentData, setShowPaymentData] = useState(false);

  const navigate = useNavigate();

  const handleCheckOutClick = () => {
    setShowPaymentData(true);
  };

  return (
    <>
      {totalAmount > 0 ? (
        <>
          <h2 className="text-center mt-10 text-pri">Cart</h2>
          <div className=" flex flex-col xl:flex-row items-start justify-start py-0 px-5 box-border gap-[24px] max-w-full container mx-auto my-16">
            <div className="flex-1 flex flex-col items-start justify-start gap-[24px] sm:mx-auto max-w-full mq750:min-w-full">
              {PRODUCTS.map((product,idx) => {
                if (cartItems[product.id] !== 0) {
                  return <ProductCart data={product} key={idx}/>;
                }
              })}
            </div>
            <CheckOut onCheckOutClick={handleCheckOutClick} />
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center my-40">
          <h1> Your Cart Is Empty ...</h1>
          <button className="cursor-pointer [border:none] p-[11px] bg-darkorange flex-1 rounded-lg overflow-hidden flex flex-row items-center justify-center whitespace-nowrap z-[1] hover:bg-chocolate">
            <div
              className="h-[34px] relative text-9xl font-medium font-lato text-white text-left inline-block"
              onClick={() => navigate("/")}
            >
              Go Shopping
            </div>
          </button>
        </div>
      )}
      {showPaymentData && <PaymentData />}
    </>
  );
};

export default Cart;
