import { getProducts } from "@/lib/firebase/getProducts";

async function getProduct(id) {
    const payload = await getProducts();
    const products = Object.values(payload);
    const singleProduct = products.find((product) => product.uid == id);
    return singleProduct;
}

export { getProduct };
