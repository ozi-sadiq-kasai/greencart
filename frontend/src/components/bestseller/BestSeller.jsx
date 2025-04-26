import './BestSeller.css'
import { dummyProducts } from '../../assets/images/assets';
import { assets } from '../../assets/images/assets';

const BestSeller = () => {
  return (
    <div className='best-container'>
      <h2>
        Best Sellers
      </h2>
      {/* <div> */}
      <ul className='best-list'>
        {dummyProducts.map((item) => (
          item.category === 'Vegetables' && (
            <li key={item._id}>
              <img src={item.image} alt={item.name} />
              <div className='best-text'>
                <p>{item.category}</p>
                <h3>{item.name}</h3>
              </div>
              <div className="stars" style={{ display: 'flex', alignItems: 'center' }}>
                {[...Array(4)].map((_, i) => (
                  <img key={`filled-${i}`} src={assets.star_icon} alt="star" style={{ width: '15px', height: '15px', objectFit: 'contain' }} />
                ))}
                <img key="dull" src={assets.star_dull_icon} alt="star" style={{ width: '15px', height: '15px', objectFit: 'contain' }} />
              </div>
              <div className="best-price">
                <div className='prices'>
                  <p className='offer'>${item.offerPrice}</p>
                  <p className='price'>${item.price}</p>
                </div>
                <div className="best-price-cart">
                  <img src={assets.cart_icon} alt="cart" className='cart' />
                  <a href="#">Add</a>
                </div>
              </div>
            </li>
          )
        ))}
      </ul>


      {/* </div> */}
    </div>
  );
};

export default BestSeller;