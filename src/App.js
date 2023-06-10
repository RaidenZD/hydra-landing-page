import {
  About,
  Footer,
  Form,
  Header,
  Hero,
  Process,
  Services,
  Tech,
} from "./containers";

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
