import Article from "../components/Article";
import BuildCard from "../components/BuildCard";
import { buildList } from "../utils/constants";

const Services = () => {
  return (
    <section className=" mt-28">
      <Article
        boldTitle="WHY BUILD"
        lightTitle="WITH HYDRA?"
        description="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
      />

      <ul>
        {buildList.map((item) => {
          return <BuildCard key={item.id} {...item} />;
        })}
      </ul>
    </section>
  );
};
export default Services;
