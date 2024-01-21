import About from "../../components/About";
import FeaturedProducts from "../../components/FeaturedProducts";
// import Hero from "../../components/Hero";

const Home = () => {
  return (
    <div style={{ marginTop: "5rem" }}>
      {/* <Hero /> */}
      <FeaturedProducts />
      <About />
    </div>
  );
};

export default Home;
