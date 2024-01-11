const FeaturedProducts = () => {
  return (
    <div>
      <section className="featured page">
        <div className="head">
          <h1>featured products</h1>
        </div>
        <div className="cols">
          {[...Array(6).keys()].map((i) => (
            <div className="cols-cont" key={i}>
              <div className="img-here">
                <img
                  src={`/images/col (${i + 1}).png`}
                  alt={`image ${i + 1}`}
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
                <button>
                  <a href="/product">buy</a>
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
