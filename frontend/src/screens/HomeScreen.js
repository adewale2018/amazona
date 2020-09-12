import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import data from "../data";

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      console.log("DATA", data);
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <ul className='products'>
      {products.map(
        ({ name, price, image, _id, brand, rating, numReviews }) => (
          <li key={_id}>
            <div className='product'>
              <Link to={`/product/${_id}`}>
                <img className='product-image' src={image} alt='Slim Shirt' />
              </Link>
              <div className='product-name'>
                <Link to={`/product/${_id}`}>{name}</Link>
              </div>
              <div className='product-brand'>{brand}</div>
              <div className='product-price'>${price}</div>
              <div className='product-rating'>
                {rating} Stars ({numReviews} Reviews)
              </div>
            </div>
          </li>
        )
      )}
    </ul>
  );
}

export default HomeScreen;
