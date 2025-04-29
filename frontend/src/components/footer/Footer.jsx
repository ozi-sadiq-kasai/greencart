import './Footer.css';
import {assets} from '../../assets/images/assets'

const Footer = () => {
  return (
    <div className='footer-container'>
    <div className='footer'>
      <div className="footer-header">
        <img src={assets.logo} alt="logo" />
        <p>We deliver fresh groceries and snacks straight to your door. Trusted by thousands, we aim to make your shopping experience simple and affordable.</p>
      </div>
      <ul className="footer-list">
        <li>
          <h4>Quick Links</h4>
          <a href="">Home</a>
          <a href="">Best Sellers</a>
          <a href="">Offers & Deals</a>
          <a href="">Contact Us</a>
          <a href="">FAQs</a>
        </li>
        <li>
          <h4>Need Help?</h4>
          <a href="">Delivery Information</a>
          <a href="">Return & Refund Policy</a>
          <a href="">Payment Methods</a>
          <a href="">Track you Order</a>
          <a href="">Contact Us</a>
        </li>
        <li>
          <h4>Follow Us</h4>
          <a href="">Instagram</a>
          <a href="">Twitter</a>
          <a href="">Facebook</a>
          <a href="">YouTube</a>
        </li>
      </ul>
    </div>
      <hr />
      <p className="copyright">© 2025 Ozi. All rights reserved.</p>
    </div>
    
  );
};

export default Footer;