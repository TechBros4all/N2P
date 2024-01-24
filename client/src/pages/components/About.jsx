import logo from "/images/N2P_LOGO.png";
const About = () => {
  return (
    <div className="mx-auto w-full text-center py-10">
      <div className="space-y-5 text-[20px]">
        <h1 className="font-semi-bold md:text-5xl text-2xl">About Us</h1>
        <img src={logo} alt="logo" className="mx-auto w-44" />
        <p className="w-2/3 mx-auto">
          N2P is a platform that allows you to buy and sell products from
          anywhere in the world. We are a team of 3 people who are passionate
        </p>
      </div>
    </div>
  );
};

export default About;
