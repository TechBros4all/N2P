import { useEffect, useState } from "react";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <div className="mx-auto w-full text-center mt-10">
        <h1 className="font-semi-bold md:text-5xl text-3xl py-5">
          Featured Products
        </h1>
        <div className="w-full h-[3px] bg-black mt-5 mb-16"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {products.map((item, index) => (
            <div key={index} className="shadow-lg">
              <div className="md:w-[20rem] lg:w-[20rem] mx-auto rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="hover:scale-105 transition-all ease-in-out duration-500 object-cover"
                />
              </div>
              <div className="card-body text-left">
                <h2 className="card-title">{item.name}</h2>
                <p>Color: {item.color}</p>
                {/* <p>Sizes: {item.size ? item.size.join(", ") : "N/A"}</p> */}
                <div className="card-actions justify-between items-center mt-2">
                  <h5 className="font-semibold">
                    <span className="text-sm text-red">Price: $</span>
                    {item.price}
                  </h5>
                  <button
                    className="btn bg-black text-white hover:bg-gray-900 transition-all ease-in-out duration-300 md:h-2"
                    // onClick={() => handleAddToCart(item)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
