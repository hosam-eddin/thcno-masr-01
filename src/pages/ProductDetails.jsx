import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../productsData";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const params = useParams();

  const product = PRODUCTS.find(
    (product) => product.id === parseInt(params.id)
  );

  if (!product) {
    return <div>Product not found</div>;
  }
  const { cartItems, addToCart } = useContext(CartContext);
  const cartItemAmount = cartItems[params.id];
  const { productName, price, description, image,inStock } = product;

  return (
    <div className="container mx-auto my-16">
      <h2 className="text-center text-pri">{productName}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <img src={image} alt={productName} className="rounded-xl w-full" />
        <div>
          <p>
            <span className="font-bold">Price:</span>{" "}
            <span className="text-pri font-bold">{price} $</span>{" "}
          </p>
          <p className="text-gray">Description: {description}</p>
          <button
            className={`w-[200px] rounded-lg transition-all duration-300 flex flex-row items-center justify-center p-1 box-border z-[2] cursor-pointer ${
              !inStock ? "bg-gray" : "bg-darkorange hover:bg-chocolate"
            }`}
            onClick={() => addToCart(params.id)}
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
          {!inStock && <h3 className="text-red-600"> Out Of Stock </h3>}
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
