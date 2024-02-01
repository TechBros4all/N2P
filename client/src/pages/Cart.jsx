import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart } = useCart();
  console.log(cart.cartItems);
  const [products, setProducts] = useState([]);

  const user = {
    displayName: "John Doe",
    email: "user@email.com",
    uid: "1234567890",
  };

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="container mx-auto xl:px-24 px-4 pt-8 py-10">
      <h2 className="text-3xl font-semibold mb-8">Items in Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-black mb-2">
                Price:{" "}
                <span className="text-green-700">${item.price.toFixed(2)}</span>
              </p>
              <p className="text-black mb-2">
                Selected Size: {item.selectedSize}
              </p>
              <div className="flex items-center mb-4">
                <button
                  className="btn btn-xs"
                  onClick={() => console.log("Decrement")}
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.quantity || 1}
                  onChange={(e) => console.log(e.target.value)}
                  className="w-12 text-center border-gray-300 border mx-2"
                />
                <button
                  className="btn btn-xs"
                  onClick={() => console.log("Increment")}
                >
                  +
                </button>
              </div>
              <button
                className="btn btn-ghost btn-xs"
                onClick={() => console.log("Delete")}
              >
                <FaTrash className="text-red-600" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="my-12 mx-auto md:max-w-full max-w-3xl md:flex justify-between items-center bg-gray-100 px-6 py-8 md:px-12 md:py-12 rounded-lg shadow-md">
        <div className="md:w-1/2 mb-6 md:mb-0 md:mr-6">
          <h3 className="font-semibold text-lg mb-2">Customer Details</h3>
          <p className="text-gray-700 mb-2">
            Name: {user ? user.displayName : "Login or update profile to see"}
          </p>
          <p className="text-gray-700 mb-2">
            Email: {user ? user.email : "Anonymous Email"}
          </p>
          <p className="text-gray-700 mb-2">
            User ID: {user ? user.uid : "Anonymous ID"}
          </p>
        </div>
        <div className="md:w-1/2">
          <h3 className="font-semibold text-lg mb-2">Shopping Details</h3>
          <p className="text-gray-700 mb-2">Total Items: {products.length}</p>
          <p className="text-gray-700 mb-4">
            Total Price: $
            {products
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </p>
          <button className="btn bg-black text-white rounded-lg w-full md:w-auto">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
