import Button from "../components/Button";

const Form = () => {
  return (
    <section className=" mt-28 flex flex-col justify-center items-center bg-gradient-to-b from-[#211E2E] via-[#403A5F] to-[#211E2E] py-[90px]">
      <h2 className=" text-white font-bold text-4xl">JOIN HYDRA</h2>

      <div className=" w-[414px] h-[1px] bg-gradient-to-l from-[#343045] via-[#C0B7E8] to-[#343045] mt-[30px]" />

      <p className=" font-light text-4xl text-white mt-[21px]">
        Let’s Build Your VR Experience
      </p>

      <div className=""></div>

      <Button />
    </section>
  );
};
export default Form;
