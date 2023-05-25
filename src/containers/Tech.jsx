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

        <button className=" z-10 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] h-[65px] w-[65px] rounded-full grid place-items-center border-[#0E0E0E] border-8">
          <img className=" scale-75" src={chevron} alt="chevron" />
        </button>
      </div>

      <ul></ul>
    </section>
  );
};
export default Tech;
