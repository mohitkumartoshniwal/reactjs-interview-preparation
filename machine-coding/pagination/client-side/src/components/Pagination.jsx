import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const LIMIT = 10;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await fetch(
      `https://dummyjson.com/products?limit=194&&select=title,description,thumbnail`
    );
    const json = await data.json();
    // 'products' contain the products in the form of array
    setProducts(json.products);
  };

  //  Fetch all the products when the component gets mounted
  useEffect(() => {
    fetchProducts();
  }, []);

  const noOfPages = Math.ceil(products.length / LIMIT);

  //  Shimmer UI can be added until products gets loaded
  return (
    <div className="container">
      <div className="products-container">
        {products
          .slice(currentPage * LIMIT - LIMIT, currentPage * LIMIT)
          .map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              thumbnail={product.thumbnail}
            />
          ))}
      </div>
      <div className="pagination-row">
        {currentPage > 1 && (
          <button
            type="button"
            onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
          >
            Prev
          </button>
        )}
        {[...Array(noOfPages).keys()].map((page) => (
          // page starts from 0
          <button
            type="button"
            key={page}
            className={`${currentPage === page + 1 && "current-page"}`}
            onClick={() => setCurrentPage(page + 1)}
          >
            {page + 1}
          </button>
        ))}
        {currentPage < noOfPages && (
          <button
            type="button"
            onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
