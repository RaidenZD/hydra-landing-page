import { arrow } from "../assets";

const ProcessItem = ({ upperText, downText, number }) => {
  return (
    <li>
      <div className="">{number}</div>

      <div className=" flex">
        <img src={arrow} alt="arrow" />

        <p>
          {upperText} <br /> {downText}
        </p>
      </div>
    </li>
  );
};
export default ProcessItem;
