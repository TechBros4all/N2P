/* eslint-disable react/no-unescaped-entities */
// import { FaXmark } from "react-icons/fa6";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import "../assets/styles/home.css";
const Cart = () => {
  return (
    <main className="container">
      <section className="hero" style={{ paddingTop: "15vh" }}>
        <div className="cart-parent">
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
            <div style={{ display: "flex", alignItems: "center" }}>
              <button className="btn cart-out">
                <a href="">Checkout</a>
              </button>
              <button className="del-icon btn nomob">
                <i className="x-mark">
                  <FaTrashAlt style={{ color: "red", fontSize: "20px" }} />
                </i>
              </button>
            </div>
          </section>
          <div className="pro-controls">
            <h3>Black Tee's</h3>
            <p>$10,000</p>
            <br />
            <div>
              <button style={{ padding: "5px" }}>
                <i>
                  <FaMinus />
                </i>
              </button>
              <span className="pro-num" style={{ padding: "5px" }}>
                1
              </span>
              <button style={{ padding: "5px" }}>
                <i>
                  <FaPlus />
                </i>
              </button>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", flexWrap: "nowrap" }}
        >
          <button className="btn cart-out-mob">
            <a href="">Checkout</a>
          </button>
          <button className="del-icon cart-out-mob">
            <i className="x-mark">
              <FaTrashAlt style={{ color: "red" }} />
            </i>
          </button>
        </div>
        <br />
        <hr />
      </section>
    </main>
  );
};

export default Cart;
