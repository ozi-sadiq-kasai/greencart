import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import "./Home.css";
import Categories from "../../components/categories/Categories";
import BestSeller from "../../components/bestseller/BestSeller"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <Hero />
        <Categories />
        <BestSeller/>
      </div>
    </>
  );
};

export default Home;
