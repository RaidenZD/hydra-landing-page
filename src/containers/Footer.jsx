import { logo, footerHLine, line6, line7 } from "../assets";
import Button from "../components/Button";
import { navLinks, footerList, footerSocials } from "../utils/constants";

const Footer = () => {
  return (
    <footer className=" mt-28 mb-16">
      <div className=" flex justify-between">
        <img className=" w-[187px]" src={logo} alt="hydra logo" />

        <img src={footerHLine} alt="horizontal line" />

        <ul className=" flex flex-col justify-between text-white font-bold">
          {navLinks.map((item) => {
            return (
              <li key={item.id}>
                <a href="">{item.title}</a>
              </li>
            );
          })}

          <li>
            <a href="">Join Hydra</a>
          </li>
        </ul>

        <img src={footerHLine} alt="horizontal line" />

        <ul className=" font-bold text-white flex flex-col justify-start gap-5">
          {footerList.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>

        <img src={footerHLine} alt="horizontal line" />

        <div className=" flex flex-col justify-between items-start text-white">
          <h4 className=" font-bold">SOCIALIZE WITH HYDRA</h4>

          <ul className=" flex gap-5">
            {footerSocials.map((item) => {
              return (
                <li key={item.id}>
                  <img src={item.image} alt={item.name} />
                </li>
              );
            })}
          </ul>

          <Button type="button" text="BUILD YOUR WORLD" />
        </div>
      </div>

      <div className=" h-[1px] bg-gradient-to-l from-[#343045] via-[#C0B7E8] to-[#343045] mt-20" />

      <p className=" font-bold text-sm text-center text-white mt-12">
        2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED{" "}
      </p>

      <img
        className=" absolute left-[4.5px] top-[4940px] -z-20"
        src={line7}
        alt="line"
      />

      <img
        className=" absolute left-[2.5px] top-[5230px] -z-20"
        src={line6}
        alt="line"
      />
    </footer>
  );
};
export default Footer;
