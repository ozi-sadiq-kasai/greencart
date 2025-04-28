import './Advantage.css'
import { assets } from '../../assets/images/assets';

const Advantage = () => {
    return (
        <div className='advantage'>
            <div className='advantage-banner'>

                <img src={assets.bottom_banner_image_sm} alt="" className='bg-sm' />
                <img src={assets.bottom_banner_image} alt="" className='bg-big' />

                <div className='advantage-list'>
                    <h2>Why We Are the Best?</h2>
                    <ul>
                        <li>
                            <img src={assets.delivery_truck_icon} alt="" />
                            <div className='advantage-list-item'>
                                <h3>Fastest Delivery</h3>
                                <p>Groceries delivered in under 30 minutes.</p>
                            </div>
                        </li>
                        <li>
                            <img src={assets.leaf_icon} alt="" />
                            <div className='advantage-list-item'>
                                <h3>Freshness Guaranteed</h3>
                                <p>Fresh produce straight from the source.</p>
                            </div>
                        </li>
                        <li>
                            <img src={assets.coin_icon} alt="" />
                            <div className='advantage-list-item'>
                                <h3>Affordable Prices</h3>
                                <p>Quality groceries at unbeatable prices.</p>
                            </div>
                        </li>
                        <li>
                            <img src={assets.trust_icon} alt="" />
                            <div className='advantage-list-item'>
                                <h3>Trusted by Thousands</h3>
                                <p>Loved by 10,000+ happy customers.</p>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Advantage;