import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import "./Home.css";
import Categories from "../../components/categories/Categories";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <Hero />
        <Categories />
      </div>
    </>
  );
};

export default Home;
