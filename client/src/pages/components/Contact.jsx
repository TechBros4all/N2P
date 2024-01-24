import { CiMail, CiPhone } from "react-icons/ci";
const Contact = () => {
  return (
    <div className="mx-auto w-full text-center py-20">
      <div className="space-y-5 text-[20px]">
        <h1 className="font-semi-bold md:text-5xl text-3xl">Contact Us</h1>
        <p className="flex items-center justify-center">
          <CiMail className="mr-1 cursor-pointer" />
          <a href="mailto:info@nth2prove.com">info@nth2prove.com</a>
        </p>
        <p className="flex items-center justify-center">
          <CiPhone className="mr-1 cursor-pointer" />
          <a href="tel:+234912345678">+234-912-345-678</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
