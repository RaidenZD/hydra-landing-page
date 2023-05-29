import { techList } from "../utils/constants";
import { vrh, chevron } from "../assets";

const Tech = () => {
  return (
    <section className=" mt-28">
      <div className=" relative flex flex-col items-center justify-center rounded-full h-[303px]">
        <img
          className=" absolute rounded-full top-0 left-0"
          src={vrh}
          alt="vr headband"
        />

        <h3 className=" font-bold text-4xl text-white z-10 mb-4">
          TECHNOLOGIES & HARDWARE
        </h3>

        <p className=" font-light text-4xl text-white z-10">
          USED BY HYDRA VR.
        </p>

        <button className=" absolute -bottom-10 z-10 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] h-[70px] w-[70px] rounded-full grid place-items-center border-[#0E0E0E] border-[11px] border-opacity-90">
          <img className=" scale-75" src={chevron} alt="chevron" />
        </button>
      </div>

      <ul className=" mt-16 flex justify-between items-center">
        {techList.map((item) => {
          return (
            <li key={item.id}>
              <img src={item.image} alt="tech image" />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Tech;
