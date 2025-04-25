import "./Categories.css";
import { categories } from "../../assets/images/assets";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="categories-container">
        <ul className="category-list">
          {categories.map((category) => (
            <li key={category.path} style={{ backgroundColor: category.bgColor }}>
              <Link to={category.path}>
                <img src={category.image} alt={category.text} />
                <p>{category.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
