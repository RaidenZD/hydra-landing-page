import Article from "../components/Article";
import Button from "../components/Button";
import { vrImage } from "../assets";

const About = () => {
  return (
    <section>
      <Article
        boldTitle="INTRODUCTION"
        lightTitle="TO HYDRA VR"
        description="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                     quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
      />

      <div className=" flex items-center mt-14 justify-between">
        <img src={vrImage} alt="Virtual reality w-1/2" />

        <article className=" text-white w-1/2">
          <h3 className=" text-4xl font-bold mb-11">
            ABOUT <br /> <span className=" font-light">HYDRA VR</span>
          </h3>

          <p className=" mb-7">
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>

          <Button text="LET’S GET IN TOUCH" type="button" />
        </article>
      </div>
    </section>
  );
};
export default About;
