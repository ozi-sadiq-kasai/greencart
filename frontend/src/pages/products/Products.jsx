import './Products.css';
import PriceCard from '../../components/priceCard/PriceCard';
import { dummyProducts } from '../../assets/images/assets';

const Products = () => {

  return (
    <div className='products'>
      <div className="products-container">
        <h2>All Products</h2>
        <PriceCard dummyProducts={dummyProducts} />
      </div>
    </div>
  );
};

export default Products;