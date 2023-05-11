import { longArrow } from "../assets";

const Article = ({ boldTitle, lightTitle, description }) => {
  return (
    <article className=" flex text-white ">
      <div className=" flex flex-col text-4xl w-1/2">
        <h2 className=" font-bold">{boldTitle}</h2>

        <div className=" flex gap-5 items-center">
          <h2 className=" font-light">{lightTitle}</h2>

          <img src={longArrow} alt="arrow" />
        </div>
      </div>

      <p className=" line-clamp-4 w-1/2">{description}</p>
    </article>
  );
};
export default Article;
