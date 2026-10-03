
import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Card = React.memo(({ data, handleAddCart }) => {

  const onAddCart = useCallback(
    (item) => {
      handleAddCart(item);
    },
    [handleAddCart]
  );

  return (
    <div className="Card">

      {data.map((item) => (

        <div className="card-item" key={item.id}>

          {/* Product Image */}
          <Link to={`/about/${item.id}`}>
            <img
              className="product-img"
              src={item.images?.[0]}
              alt={item.title}
            />
          </Link>

          {/* Product Title */}
          <div className="product-title">
            {item.title}
          </div>

          {/* Product Price */}
          <div className="product-price">
            ${item.price}
          </div>

          {/* Add To Cart */}
          <button onClick={() => onAddCart(item)}>
            Add to Cart
          </button>

        </div>

      ))}

    </div>
  );
});

export default Card;

