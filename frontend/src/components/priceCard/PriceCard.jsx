import './PriceCard.css'
import { assets } from '../../assets/images/assets';

const PriceCard = ({ dummyProducts }) => {
  // console.log(dummyProducts);
  return (
    <div className='best-container'>
      <ul className='best-list'>
      {dummyProducts.map((item) => (
        <li key={item._id}>
          <img src={item.image} alt={item.name} />
          <div className='best-text'>
            <p>{item.category}</p>
            <h3>{item.name}</h3>
          </div>
          <div className="stars" >
            {[...Array(4)].map((_, i) => (
              <img key={`filled-${i}`} src={assets.star_icon} alt="star" />
            ))}
            <img key="dull" src={assets.star_dull_icon} alt="star" className='dull-star' />
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

      ))}
      </ul>

    </div>
  );
};

export default PriceCard;

//    {dummyProducts.map((item) => (
//           item.category === 'Vegetables' && (
//             <li key={item._id}>
//               <img src={item.image} alt={item.name} />
//               <div className='best-text'>
//                 <p>{item.category}</p>
//                 <h3>{item.name}</h3>
//               </div>
//               <div className="stars" >
//                 {[...Array(4)].map((_, i) => (
//                   <img key={`filled-${i}`} src={assets.star_icon} alt="star"  />
//                 ))}
//                 <img key="dull" src={assets.star_dull_icon} alt="star" className='dull-star'/>
//               </div>
//               <div className="best-price">
//                 <div className='prices'>
//                   <p className='offer'>${item.offerPrice}</p>
//                   <p className='price'>${item.price}</p>
//                 </div>
//                 <div className="best-price-cart">
//                   <img src={assets.cart_icon} alt="cart" className='cart' />
//                   <a href="#">Add</a>
//                 </div>
//               </div>
//             </li>
//           )
//         ))}