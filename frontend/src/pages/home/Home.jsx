import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <Hero />
      </div>
    </>
  );
};

export default Home;
