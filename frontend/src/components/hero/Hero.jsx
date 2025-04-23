import "./Hero.css";
import { assets } from "../../assets/images/assets";
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="hero">
      <img
        className="hero-sm"
        src={assets.main_banner_bg_sm}
        alt="small banner"
      />
      <img
        className="hero-bg"
        src={assets.main_banner_bg}
        alt="desktop banner"
      />
      <div className="hero-content">
        <h1>Freshness You Can Trust, Savings You Will Love!</h1>
        <div className="hero-content-buttons">
          <div className="hero-content-text-sm">
            <a href="#">Shop Now</a>
            <IoIosArrowRoundForward className="arrow" />
          </div>
          <div className="hero-content-text-bg">
            <a href="#">Explore More</a>
            <IoIosArrowRoundForward
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
