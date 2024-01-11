/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <section className="about">
      <div className="head head-rev">
        <h1>about us</h1>
        <img src="/images/N2P_LOGO.png" alt="logo" width="150" />
      </div>
      <article>
        <p>
          N2P(Nothing To Prove)is a Nigerian Based clothing brand that embodies
          confidence, individuality, Creativity, Quality, and Self expression
          The brand's name conveys the idea that true style and personal worth
          do not need “validation”from others. It celebrates the authenticity
          and uniqueness of each individual, encouraging people to embrace their
          own sense of fashion.
        </p>
      </article>
      <div className="gap"></div>
      <div className="head head-none">
        <h1>contact us</h1>
        <p>
          <i className="fa-solid fa-envelope"></i>{" "}
          <a href="mailto: info@nth2prove.com">info@nth2prove.com</a>
        </p>
        <p>
          <i className="fa-solid fa-phone"></i>{" "}
          <a href="tel: +234912345678">+234-912-345-678</a>
        </p>
      </div>
    </section>
  );
};

export default About;
