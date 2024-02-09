import React, { useState } from "react";
import ProductCard from "../Product/ProductCard";
import { PRODUCTS } from "../../productsData";
import FilterCheckbox from './FilterCheckbox';

const ProductsContainer = () => {
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleCheckboxChange = (e) => {
    setInStockOnly(e.target.checked);
  };

  // Filter products based on the inStockOnly state
  const filteredProducts = inStockOnly
    ? PRODUCTS.filter((product) => product.inStock)
    : PRODUCTS;

    return (
      <div className="container mx-auto text-center py-6">
        <div className="flex sm:flex-row flex-col">
          <aside className="sm:w-1/4 bg-whitesmoke-100 shadow-lg h-fit py-11 sticky">
            <h2>Filter</h2>
            <FilterCheckbox checked={inStockOnly} onChange={handleCheckboxChange} />
          </aside>
          <div className="sm:w-3/4 pl-6">
            <h2 className="text-darkgray">Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-5 my-16">
              {filteredProducts.map((product, id) => (
                <ProductCard data={product} key={id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
export default ProductsContainer;

{/* <div className="flex justify-end mb-4">
<FilterCheckbox checked={inStockOnly} onChange={handleCheckboxChange} />
</div> */}