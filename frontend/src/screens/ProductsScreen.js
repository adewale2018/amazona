import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

function ProductsScreen(props) {
  const product_id = Number(props.match.params.id);
  const product = data.products.find((p) => p._id === product_id);
  const { name, image, price, rating, numReviews } = product;
  return (
    <>
      <div className='back-to-result'>
        <Link to='/'>&#171;Back to result</Link>
      </div>
      <div className='details'>
        <div className='details-image'>
          <img src={image} alt={name} />
        </div>
        <div className='details-info'>
          <ul>
            <li>
              <h4>{name}</h4>
            </li>
            <li>
              {rating} Stars ({numReviews} Reviews)
            </li>
            <li>
              Price: <strong>${price}</strong>
            </li>
            <li>Description:</li>
          </ul>
        </div>
        <div className='details-action'>
          <ul>
            <li>Price: ${price}</li>
            <li>Status:</li>
            <li>
              Qty:{" "}
              <select>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </li>
            <li>
              <button className='button'>Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductsScreen;
