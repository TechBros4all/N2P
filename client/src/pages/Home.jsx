import FeaturedProducts from "./components/FeaturedProducts";
import About from "./components/About";
import Contact from "./components/Contact";

const Home = () => {
  return (
    <div className="xl:px-24 px-4">
      <FeaturedProducts />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
