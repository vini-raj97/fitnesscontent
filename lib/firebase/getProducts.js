import { db } from './firebase.config'; // Update the path accordingly

export async function getProducts() {
    try {
        const dbRef = db.ref('/fitnesscontent'); // Update 'node-name' with your actual node name in the database
        const dataSnapshot = await dbRef.once('value');
        return dataSnapshot.val();
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error; // Rethrow the error to handle it in the calling component
    }
}
