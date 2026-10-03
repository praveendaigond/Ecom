import React, { useMemo } from "react";
import Card from "../../Components/Card/index";
import useProducts from "../../Hooks/useProducts";
import useCart from "../../Hooks/useCart";

const Home = ({ search, filter }) => {
  const { products, loading } = useProducts();
  const { addItem } = useCart();

  const filteredProducts = useMemo(() => {
    let result = products;

    if (filter && filter !== "All") {
      result = result.filter(
        (product) => product.category === filter
      );
    }

    if (search) {
      result = result.filter((product) =>
        product.title
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    return result;
  }, [products, filter, search]);

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  return (
    <div className="Home">
      <Card
        data={filteredProducts}
        handleAddCart={addItem}
      />
    </div>
  );
};

export default Home;