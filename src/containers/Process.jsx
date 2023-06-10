import Article from "../components/Article";
import ProcessItem from "../components/ProcessItem";
import { processList } from "../utils/constants";
import { line5 } from "../assets";

const Process = () => {
  return (
    <section id="how" className=" mt-20">
      <Article
        boldTitle="HOW WE BUILD"
        lightTitle="WITH HYDRA VR?"
        description="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
      />

      <ul className=" mt-28 flex justify-between items-center">
        {processList.map((item) => {
          return <ProcessItem key={item.id} {...item} />;
        })}
      </ul>

      <img
        className=" absolute top-[3720px] -z-20 -left-[9px]"
        src={line5}
        alt="line"
      />
    </section>
  );
};
export default Process;
