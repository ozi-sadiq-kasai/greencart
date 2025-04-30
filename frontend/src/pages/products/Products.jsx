import './Products.css';
import PriceCard from '../../components/priceCard/PriceCard';
import { dummyProducts } from '../../assets/images/assets';

const Products = () => {

  return (
    <div>
      <h2>All Products</h2>
      <PriceCard dummyProducts={dummyProducts}/>
    </div>
  );
};

export default Products;