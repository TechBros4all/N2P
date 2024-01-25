import naijlogo from "/images/naijlogo.png";
const About = () => {
  return (
    <div className="mx-auto w-full text-center py-10">
      <div className="space-y-5 text-[20px]">
        <h1 className="font-semi-bold md:text-5xl text-3xl">About Us</h1>
        <div className="mx-auto w-28 md:w-48 overflow-hidden">
          <img src={naijlogo} alt="logo" className="oject-cover" />
        </div>
        <p className="md:w-2/3 mx-auto text-[16px] md:text-lg">
          N2P (Nothing2prove) a streetwear brand, that conveys the idea that
          true style and personal worth do not need validation from others.
        </p>
      </div>
    </div>
  );
};

export default About;
