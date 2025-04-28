import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import "./Home.css";
import Categories from "../../components/categories/Categories";
import BestSeller from "../../components/bestseller/BestSeller";
import Advantage from "../../components/advantage/Advantage";
import Deal from "../../components/deal/Deal";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <Hero />
        <Categories />
        <BestSeller/>
        <Advantage />
        <Deal />
      </div>
    </>
  );
};

export default Home;
