import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Categories from "./Components/Categories/Categories";

function Index() {
  return (
    <>
      <Header />

      <Footer />

      <div className="container heroContainer">
        <Hero />
        <Categories />
      </div>

      <br />
      <br />
    </>
  );
}

export default Index;
