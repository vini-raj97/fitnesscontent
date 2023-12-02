// import { getProduct } from '@/lib/firebase/getProduct';

// // Function to fetch a single product based on the provided ID
// async function getProductData(id) {
//     const payload = await getProduct();
//     const products = Object.values(payload);
//     const singleProduct = products.find(product => product.uid == id);
//     return singleProduct;
// }

// // Single Product Page Component
// async function ProductPage({ product }) {
//     // If the product is not found, you can handle this case accordingly
//     if (!product) {
//         return (
//             <>
//                 <header>
//                     {<h1></h1> }
//                 </header>
//                 <main>
//                     <p>Product not found.</p>
//                 </main>
//             </>
//         );
//     }

//     const { uid, productName, productImage, shortDescription, productPrice } = product;

//     return (
//         <>
//             <header>
//                 <h1>{productName}</h1>
//             </header>

//             <main className="min-h-screen py-24">
//                 {/* Display product details */}
//                 <div>
//                     <img src={productImage} alt={productName} />
//                     <p>{shortDescription}</p>
//                     <p>{productPrice}</p>
//                     {/* Add other product details as needed */}
//                 </div>
//             </main>
//         </>
//     );
// }

// // Fetch the product data before rendering the page
// export async function getServerSideProps({ params }) {
//     const { id } = params;
//     const product = await getProductData(id);

//     return {
//         props: {
//             product,
//         },
//     };
// }

// export default ProductPage;
