import './Seller.css';
import { assets } from '../../assets/images/assets'; // make sure this path is correct
import { useState } from 'react';

const Seller = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className='seller'>
      <div className='sidebar'>
        <div className='sidebar-products'>
          <img src={assets.add_icon} alt="" />
          <a href="/addProducts">Add Products</a>
        </div>
        <div className='sidebar-products'>
          <img src={assets.product_list_icon} alt="" />
          <a href="/productlist">Product List</a>
        </div>
      </div>

      <hr />

      <form>
        <div className="form-group">
          <label htmlFor="image">Product Image</label>
          <img
            src={preview || assets.upload_area}
            alt="Upload"
            onClick={() => document.getElementById('image').click()}
            className="upload-image"
          />
          <input
            type="file"
            id="image"
            hidden
            required
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input type="text" placeholder='Type here' required />
        </div>

        <div className="form-group">
          <label htmlFor="description">Product Description</label>
          <textarea cols="50" rows="5" placeholder='Type here'></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" required>
            <option value="">Select Category</option>
            <option value="instant">Instant</option>
            <option value="vegetables">Vegetables</option>
            <option value="drinks">Drinks</option>
            <option value="diary">Diary</option>
            <option value="bakery">Bakery</option>
            <option value="grains">Grains</option>
          </select>
        </div>

        <div className="price-section">
          <div className="form-group">
            <label htmlFor="price">Product Price</label>
            <input type="number" placeholder='0' required />
          </div>
          <div className="form-group">
            <label htmlFor="offerPrice">Offer Price</label>
            <input type="number" placeholder='0' />
          </div>
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Seller;
