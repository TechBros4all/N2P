import { FaMinus, FaPlus } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

/* eslint-disable react/no-unescaped-entities */
export const Products = () => {
  return (
    <main className="container">
      <section className="hero">
        <div className="parent">
          <div className="pro-controls">
            <h3>Black Tee's</h3>
            <p>$10,000</p>
            <h3>Quantity</h3>
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
          <div className="pro-cta">
            <h3>Size:</h3>
            <button className="btn btn-nobg">Extra Lage</button>
            <button className="btn btn-nobg">Lage</button>
            <button className="btn btn-nobg">Medium</button>
            <button className="btn btn-nobg">Small</button> <br />
            <button className="btn btn-nobg atc">
              <a href="/cart">Add to cart</a>
            </button>
            {/* <button className="btn">BUY NOW</button> */}
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
            </div>
            <div>
              <h3 style={{ marginBottom: "-5%" }}>Quantity</h3>
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
              <button className="btn btn-nobg atc">
                <a href="/cart">Add to cart</a>
              </button>
            </div>
          </div>
        </div>
        <section className="about">
          <h2>Related Products</h2>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            allowTouchMove={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {[...Array(7).keys()].map((i) => (
              <SwiperSlide key={`related-product-${i}`}>
                <div className="img-here">
                  <img
                    src={`/images/col (${i + 1}).png`}
                    alt={`image ${i + 1}`}
                  />
                </div>
                <div className="cols-text pro row">
                  <div>
                    <h1>Tee's</h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper">
            {/* Additional required wrapper */}
            <div className="swiper-container">{/* Slides */}</div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Products;
