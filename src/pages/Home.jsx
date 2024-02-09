import React, { useRef } from "react";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import ProductsContainer from "../components/ProductsContainer/ProductsContainer";

const Home = () => {
  const productsRef = useRef(null);

  const scrollToProducts = () => {
    productsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <HeroSlider scrollToProducts={scrollToProducts} />
      <section ref={productsRef} id="Products">
        <ProductsContainer />
      </section>
    </div>
  );
};

export default Home;
