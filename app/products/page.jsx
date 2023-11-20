import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/cards/product.jsx';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fintnesstrainer-default-rtdb.firebaseio.com/fitnesscontent.json');
        const data = await res.json();
        setProducts(Object.values(data));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.uid} {...product} />
      ))}
    </div>
  );
};

export default ProductsPage;
