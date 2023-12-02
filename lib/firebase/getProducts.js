// lib/firebase/getProducts.js

import { db } from './firebase.config';

export async function getProducts() {
    try {
        const dbRef = db.ref('/fitnesscontent');
        const dataSnapshot = await dbRef.once('value');

        // Check if dataSnapshot exists and has a value property
        if (dataSnapshot && dataSnapshot.val()) {
            const productsObject = dataSnapshot.val();
            const productsArray = Object.values(productsObject);
            return productsArray;
        } else {
            // Handle the case where dataSnapshot is undefined or null
            console.error('Error: DataSnapshot is undefined or null');
            return null;
        }
    } catch (error) {
        // Handle other errors
        console.error('Error fetching products:', error);
        return null;
    }
}
