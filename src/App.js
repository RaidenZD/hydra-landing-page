import About from "./containers/About";
import Footer from "./containers/Footer";
import Form from "./containers/Form";
import Header from "./containers/Header";
import Hero from "./containers/Hero";
import Process from "./containers/Process";
import Services from "./containers/Services";
import Tech from "./containers/Tech";

function App() {
  return (
    <div className=" mx-5 mt-5 lg:mx-10 md:mt-7 xl:max-w-[1272px] xl:mt-10 xl:mx-auto">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Tech />
        <Process />
        <Form />
        <Footer />
      </main>
    </div>
  );
}

export default App;
