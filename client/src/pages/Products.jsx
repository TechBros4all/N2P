// import { FaMinus, FaPlus } from "react-icons/fa6";
/* eslint-disable react/no-unescaped-entities */
import "swiper/css";
import { useState } from "react";
import PropTypes from "prop-types";

const Products = ({ selectedProduct }) => {
  const [productData, setProductData] = useState(null);
  console.log(selectedProduct);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:4000/get-products");
  //       const data = await response.json();
  //       setProductData(data);
  //     } catch (error) {
  //       console.log("Error fetching product data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <main className="container">
      <section className="hero">
        <div className="parent">
          <section>
            {productData &&
              Object.entries(productData).map(([imageName, imagePath]) => (
                <div className="cols-cont" key={imageName}>
                  <div className="img-here">
                    <img
                      src={
                        selectedProduct === imagePath
                          ? selectedProduct
                          : imagePath
                      }
                      alt={imageName}
                    />
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
Products.propTypes = {
  selectedProduct: PropTypes.string,
};
