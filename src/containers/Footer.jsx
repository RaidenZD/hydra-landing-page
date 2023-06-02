import { logo, footerHLine } from "../assets";
import Button from "../components/Button";
import { navLinks, footerList } from "../utils/constants";

const Footer = () => {
  return (
    <footer className=" mt-28 mb-16">
      <div className=" flex">
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

        <div className="">
          <h4></h4>

          <ul></ul>

          <Button />
        </div>
      </div>

      <div className=" h-[1px] bg-gradient-to-l from-[#343045] via-[#C0B7E8] to-[#343045] mt-20" />

      <p className=" font-bold text-sm text-white mt-12">
        2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED{" "}
      </p>
    </footer>
  );
};
export default Footer;
