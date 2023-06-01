import Button from "../components/Button";
import Input from "../components/Input";

const Form = () => {
  return (
    <section className=" mt-28 flex flex-col justify-center items-center rounded-[100px] bg-gradient-to-b from-[#211E2E] via-[#403A5F] to-[#211E2E] py-[90px] px-28">
      <h2 className=" text-white font-bold text-4xl">JOIN HYDRA</h2>

      <div className=" w-[414px] h-[1px] bg-gradient-to-l from-[#343045] via-[#C0B7E8] to-[#343045] mt-[30px]" />

      <p className=" font-light text-4xl text-white mt-[21px]">
        Let’s Build Your VR Experience
      </p>

      <div className=" grid grid-cols-2 self-stretch mt-16 mb-[51px]  gap-x-[10px] gap-y-9">
        <Input />
        <Input />
        <Input />
        <Input />
        <Input span={true} />
        <textarea
          className="rounded-[40px] border-2 border-white bg-transparent col-span-2 text-sm text-white py-6 px-11"
          name=""
          id=""
          rows={9}
        ></textarea>
      </div>

      <Button text="SEND TO HYDRA" type="submit" />
    </section>
  );
};
export default Form;
