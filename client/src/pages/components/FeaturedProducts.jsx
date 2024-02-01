import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleSizeChange = (productId, selectedSize) => {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [productId]: selectedSize,
    }));
  };

  const handleAddToCart = (item) => {
    const selectedSize = selectedSizes[item._id];
    if (!selectedSize) {
      enqueueSnackbar("Please select a size before adding to cart.", {
        variant: "error",
      });
      return;
    }

    const itemToAdd = { ...item, selectedSize };
    addToCart(itemToAdd);
    navigate("/cart");
  };

  return (
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
              <div className="card-actions justify-between items-center mt-2">
                <h5 className="font-semibold">
                  <span className="text-sm text-red">Price: $</span>
                  {item.price}
                </h5>
                <div className="flex items-center">
                  <div className="mr-4">
                    <label htmlFor={`size-${index}`}>Size:</label>
                    <select
                      id={`size-${index}`}
                      className="ml-2 border border-gray-300 rounded-md px-2 py-1"
                      onChange={(e) =>
                        handleSizeChange(item._id, e.target.value)
                      }
                    >
                      <option value="">Select</option>
                      {item.size.map((size, sizeIndex) => (
                        <option key={sizeIndex} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    className="btn bg-black text-white hover:bg-gray-900 transition-all ease-in-out duration-300 md:h-2"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
