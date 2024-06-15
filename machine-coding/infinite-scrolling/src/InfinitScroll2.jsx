import { useEffect, useRef, useState } from "react";

const InfinitScroll2 = () => {
  const [products, setProducts] = useState([]);
  const sentinelRef = useRef();

  useEffect(() => {
    fetchProducts();

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchProducts();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: "1.0",
      }
    );

    const sentinelNode = sentinelRef.current;

    if (sentinelNode) {
      observer.observe(sentinelNode);
    }

    return () => {
      if (sentinelNode) {
        observer.unobserve(sentinelNode);
      }
    };
  }, []);

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
      <div ref={sentinelRef}>
        <strong>Load More</strong>
      </div>
    </>
  );
};

export default InfinitScroll2;
