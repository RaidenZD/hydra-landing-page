import About from "./containers/About";
import Header from "./containers/Header";
import Hero from "./containers/Hero";
import Services from "./containers/Services";

function App() {
  return (
    <div className=" mx-5 mt-5 lg:mx-10 md:mt-7 xl:max-w-7xl xl:mt-10 xl:mx-auto">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
      </main>
    </div>
  );
}

export default App;
