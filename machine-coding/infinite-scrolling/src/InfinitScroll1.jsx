import { useEffect, useState } from "react";

const InfinitScroll1 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      fetchProducts();
    }
  }

  async function fetchProducts() {
    const res = await fetch(`https://dummyjson.com/products?limit=50`);
    const data = await res.json();
    setProducts((prevProducts) => [...prevProducts, ...data.products]);
  }

  return (
    <>
      <ul>
        {products.map((product, i) => (
          <li key={i}>{product.title}</li>
        ))}
      </ul>
    </>
  );
};

export default InfinitScroll1;
