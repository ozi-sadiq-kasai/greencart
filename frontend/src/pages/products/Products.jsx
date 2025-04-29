import './Products.css';
import PriceCard from '../../components/priceCard/PriceCard';
import { dummyProducts } from '../../assets/images/assets';

const Products = () => {

  return (
    <div>Products
      <PriceCard dummyProducts={dummyProducts}/>
    </div>
  );
};

export default Products;