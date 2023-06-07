import Button from "../components/Button";
import { arrow, landingImage, line1, line2, line3, line4 } from "../assets";
import Contact from "../components/Contact";
import { contacts as contactList } from "../utils/constants";

const Hero = () => {
  return (
    <section className=" mt-20 flex flex-col">
      <div className=" flex items-center justify-between">
        {/* Information */}
        <div className="">
          <h1 className=" text-5xl font-[700] text-white line">
            <span className=" bg-gradient-to-r from-[#C0B7E8] to-[#8176AF] bg-clip-text text-transparent">
              Dive
            </span>{" "}
            Into The Depths <br /> Of{" "}
            <span className=" bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] bg-clip-text text-transparent">
              Virtual Reality
            </span>
          </h1>

          <p className=" text-white mt-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed
            do eiusmod tempor incididunt ut labore et dolore <br /> nisl
            tincidunt eget. Lectus mauris eros in vitae .
          </p>

          <div className=" flex gap-7 mt-16">
            <Button type="button" text="Build your world" />
            <img src={arrow} alt="" />
          </div>
        </div>

        {/* Image */}
        <div className=" ">
          <img
            className=" absolute -z-10 right-0 top-[170px]"
            src={line1}
            alt=""
          />
          <img
            className=" absolute -z-10 top-0 right-[134px]"
            src={line2}
            alt=""
          />
          <img
            className=" absolute -z-10 right-0 top-[419px]"
            src={line3}
            alt=""
          />
          <img
            className=" absolute -z-10 left-0 top-[274px]"
            src={line4}
            alt=""
          />

          <img
            width={490}
            height={426}
            src={landingImage}
            alt="landing image"
          />
        </div>
      </div>

      {/* Contact */}
      <div className=" mt-24 mb-20 flex justify-between rounded-full px-12 py-8 pr-28  bg-gradient-to-tr from-[#3A3456F2] to-[#211E2E]">
        <Contact
          title={contactList[0].title}
          description={contactList[0].description}
          icon={contactList[0].icon}
        />

        <div className=" w-[1px] h-[116px] bg-[#C0B7E854]"></div>

        <Contact
          title={contactList[1].title}
          description={contactList[1].description}
          icon={contactList[1].icon}
        />

        <div className=" w-[1px] h-[116px] bg-[#C0B7E854]"></div>

        <Contact
          title={contactList[2].title}
          description={contactList[2].description}
          icon={contactList[2].icon}
        />
      </div>
    </section>
  );
};
export default Hero;
