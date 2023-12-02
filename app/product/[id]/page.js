import { getProducts } from "@/lib/firebase/getProducts";

async function getProductById(id) {
    try {
        const payload = await getProducts();
        const products = Object.values(payload);
        const singleProduct = products.find((product) => product.uid == id);
        return singleProduct;
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error; // Rethrow the error to handle it in the calling code
    }
}

async function ProductPage({ params }) {
    const id = params.id;

    try {
        const productData = await getProductById(id);

        return (
            <>
                <main className="min-h-screen py-24">
                    {/* Render UI for single product using productData */}
                    <h1>{productData.videoName}</h1>
                    <p>{productData.shortDescription}</p>
                    <p>{productData.videoPrice}</p>
                </main>
            </>
        );
    } catch (error) {
        // Handle error gracefully, show an error message or fallback content
        console.error('Error fetching product:', error);
        return (
            <>
                <main className="min-h-screen py-24">
                    <p>Error fetching product. Please try again later.</p>
                </main>
            </>
        );
    }
}

export default ProductPage;
