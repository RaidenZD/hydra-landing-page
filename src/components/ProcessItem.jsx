import { smallArrow } from "../assets";

const ProcessItem = ({ upperText, downText, number }) => {
  return (
    <li className=" flex flex-col gap-6 items-center">
      <div className="w-[198px] h-[198px] bg-[#0D0D0D52] rounded-full grid place-content-center bg-opacity-30">
        <div className=" w-40 h-40 grid place-content-center border-transparent rounded-full bg-gradient-to-r from-[#C0B7E8] to-[#8176AF] text-[#343045] font-bold text-[64px]">
          {number}
        </div>
      </div>

      <div className=" flex items-start gap-4">
        <img className=" mt-1" src={smallArrow} alt="arrow" />

        <p className=" text-white font-bold text-2xl">
          {upperText} <br /> {downText}
        </p>
      </div>
    </li>
  );
};
export default ProcessItem;
