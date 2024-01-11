/* eslint-disable react/no-unescaped-entities */
import { FaXmark } from "react-icons/fa6";
import { FaMinus, FaPlus } from "react-icons/fa";
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
                  <button className="del-icon" type="submit">
                    <i className="x-mark">
                      <FaXmark style={{ color: "white" }} />
                    </i>
                  </button>
                  <img
                    src={`/images/col (${i + 1}).png`}
                    alt={`image ${i + 1}`}
                  />
                </div>
              </div>
            ))}
            <button className="btn cart-out">
              <a href="">Checkout</a>
            </button>
          </section>
          <div className="pro-controls">
            <h3>Black Tee's</h3>
            <p>$10,000</p>
            <br />
            <div>
              <button className="btn">
                <i>
                  <FaMinus />
                </i>
              </button>
              <span className="pro-num">1</span>
              <button className="btn">
                <i>
                  <FaPlus />
                </i>
              </button>
            </div>
          </div>
        </div>
        <button className="btn cart-out-mob">
          <a href="">Checkout</a>
        </button>
        <br />
        <hr />
      </section>
    </main>
  );
};

export default Cart;
