import Button from "../components/Button";

const BuildCard = ({ image, title, description }) => {
  return (
    <article className=" flex flex-col items-center pb-10 rounded-[40px] bg-gradient-to-b from-[#211E2E] via-[#433D60] to-[#211E2E]">
      <img
        className=" h-48 w-48 rounded-full border-[11px] border-black border-opacity-50 mt-9"
        src={image}
        alt={title}
      />

      <h4 className=" mt-8 text-2xl font-bold text-white">{title}</h4>

      <hr className=" text-[#C0B7E854] h-1 w-40 mt-4" />

      <p className=" text-xs px-8 mt-5 text-white mb-9">{description}</p>

      <Button text="TRY IT NOW" type="button" />
    </article>
  );
};
export default BuildCard;
