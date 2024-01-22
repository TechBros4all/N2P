/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const FeaturedProducts = ({ onSelectedProduct }) => {
  const [productData, setProductData] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/get-products");
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);
  const handleBuyClick = () => {
    // Assuming selectedProductData is available or you can retrieve it from somewhere
    const selectedProductData = productData.find(
      (product) => product.imagePath === selectedProduct
    );
    setSelectedProduct(selectedProductData);
    onSelectedProduct(selectedProductData);
    console.log(selectedProductData);
  };

  return (
    <div>
      <section className="featured page">
        <div className="head">
          <h1>featured products</h1>
        </div>
        <div className="cols">
          {productData &&
            Object.entries(productData).map(([imageName, imagePath], index) => (
              <div className="cols-cont" key={index}>
                <div className="img-here">
                  <img
                    src={imagePath}
                    alt={`image ${index + 1}` || imageName}
                  />
                </div>
                <div className="cols-text pro row">
                  <div>
                    <h1>product name</h1>
                    <h2>$ 10,000</h2>
                  </div>
                  <div className="row">
                    <i className="fa-solid fa-heart"></i>
                  </div>
                </div>
                <div className="cols-text pro row">
                  <button onClick={() => handleBuyClick(imagePath)}>
                    <a>buy</a>
                  </button>
                  <i className="fa-solid fa-shopping-bag"></i>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedProducts;
