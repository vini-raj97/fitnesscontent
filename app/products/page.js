import { getProducts } from '@/lib/firebase/getProducts';
import { MultipleCard } from '@/components/cards/MultipleCard';
import { NavBar } from '@/components/ui/navigation/NavBar';

async function ProductsPage({ children }) {
  try {
    const products = await getProducts();

    if (products && Array.isArray(products)) {
      return (
        <>
          <NavBar />
          <div className="grid grid-cols-3 gap-4">
            {products.map((product) => (
              <MultipleCard key={product.uid} {...product} />
            ))}
          </div>
        </>
      );
    } else {
      console.error('Error: Products is null or not an array');
      return null;
    }
  } catch (error) {
    console.error('Error fetching products:', error);
    return null;
  }
}

export default ProductsPage;
