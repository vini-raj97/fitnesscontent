import { getProducts } from '@/lib/firebase/getProducts';
import { ProductCard } from '@/components/cards/SingleProductCard'
import { NavBar } from '@/components/ui/navigation/NavBar'

async function getProduct(id) {
    const payload = await getProducts();
    const products = Object.values(payload);
    const singleProduct = products.find((product) => product.uid == id);
    return singleProduct;
}

async function ProductPage({ params }) {
    const id= params.id
    const product = await getProduct(id)
    console.log(product)
    return (
        <>
            <header className=" justify-between">
                <NavBar></NavBar>
            </header>
            <main>
                <ProductCard key={product.product_id} {...product}></ProductCard>
            </main>
        </>
    );
}


export default ProductPage;
