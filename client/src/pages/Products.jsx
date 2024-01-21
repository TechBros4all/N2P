// import { FaMinus, FaPlus } from "react-icons/fa6";
import "swiper/css";
import axios from "axios";
import { useEffect, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
export const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/get-products");
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <main className="container">
      <section className="hero">
        <div className="parent">
          <section>
            {/* {[...Array(1).keys()].map((i) => (
              <div className="cols-cont" key={i}>
                <div className="img-here">
                  <img
                    src={`/images/col (${i + 1}).png`}
                    alt={`image ${i + 1}`}
                  />
                </div>
              </div>
            ))} */}
            {products.map((product, index) => (
              <div className="cols-cont" key={index}>
                <div className="img-here">
                  <img src={product} alt={`image ${index}`} />
                </div>
              </div>
            ))}
          </section>
          <div className="pro-cta">
            <div>
              <div>
                <h3>Black Tee's</h3>
                <p>$10,000</p>
              </div>
              <h3>Size:</h3>
              <button className="btn btn-nobg">Extra Lage</button>
              <button className="btn btn-nobg">Lage</button>
              <button className="btn btn-nobg">Medium</button>
              <button className="btn btn-nobg">Small</button> <br />
              <h3>Color:</h3>
              <button className="btn btn-nobg">Black</button>
              <button className="btn btn-nobg">White</button>
            </div>
            <button className="btn btn-nobg atc">
              <a href="/cart">Add to cart</a>
            </button>
          </div>
        </div>
        <div className="parent-mob">
          <section>
            {[...Array(1).keys()].map((i) => (
              <div className="cols-cont" key={i}>
                <div className="img-here">
                  <img
                    src={`/images/col (${i + 1}).png`}
                    alt={`image ${i + 1}`}
                  />
                </div>
              </div>
            ))}
          </section>
          <div className="pro-controls">
            <h3>Black Tee's</h3>
            <p>$10,000</p>
            <br />
            <div className="pro-cta-mob">
              <h3>Size:</h3>
              <button className="btn btn-nobg">Extra Lage</button>
              <button className="btn btn-nobg">Lage</button>
              <button className="btn btn-nobg">Medium</button>
              <button className="btn btn-nobg">Small</button> <br />
              {/* <button className="btn">BUY NOW</button> */}
              <h3>Color:</h3>
              <button className="btn btn-nobg">Black</button>
              <button className="btn btn-nobg">White</button>
              <br />
            </div>
            <button className="btn btn-nobg atc">
              <a href="/cart">Add to cart</a>
            </button>
            {/* <h3 style={{ marginBottom: "5%" }}>Quantity:</h3> */}

            {/* <div>
              <button style={{ padding: "5px" }}>
                <i>
                  <FaMinus />
                </i>
              </button>
              <span className="pro-num" style={{ padding: "5px" }}>
                1
              </span>
              <button style={ { padding: "5px" }}>
                <i>
                  <FaPlus />
                </i>
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
