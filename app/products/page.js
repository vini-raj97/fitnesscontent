// app/products/page.js

import { getProducts } from '@/lib/firebase/getProducts';
import { MultipleCard } from '@/components/cards/Card';

async function ProductsPage({ children }) {
  try {
    const products = await getProducts();

    if (products && Array.isArray(products)) {
      return (
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <MultipleCard key={product.uid} {...product} />
          ))}
        </div>
      );
    } else {
      // Handle the case where products is null or not an array
      console.error('Error: Products is null or not an array');
      return null;
    }
  } catch (error) {
    // Handle other errors
    console.error('Error fetching products:', error);
    return null;
  }
}

export default ProductsPage;
