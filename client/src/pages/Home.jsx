import { useState } from "react";
import About from "../../components/About";
import FeaturedProducts from "../../components/FeaturedProducts";
import Products from "./Products";
// import Hero from "../../components/Hero";

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div style={{ marginTop: "5rem" }}>
      {/* <Hero /> */}
      <FeaturedProducts onSelectProduct={setSelectedProduct} />
      <Products selectedProduct={selectedProduct} />
      <About />
    </div>
  );
};

export default Home;
