import logo from "/images/N2P_LOGO.png";
const About = () => {
  return (
    <div className="mx-auto w-full text-center py-10">
      <div className="space-y-5 text-[20px]">
        <h1 className="font-semi-bold md:text-5xl text-3xl">About Us</h1>
        <img src={logo} alt="logo" className="mx-auto w-28 md:w-44" />
        <p className="md:w-2/3 mx-auto text-[16px] md:text-lg">
          N2P (Nothing2prove) a streetwear brand, that conveys the idea that
          true style and personal worth do not need validation from others.
        </p>
      </div>
    </div>
  );
};

export default About;
