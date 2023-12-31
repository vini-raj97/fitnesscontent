import admin from "firebase-admin"
import { initializeApp, getApps } from "firebase-admin/app"
import { serviceKey } from "@/config/serviceAccountKey"




if (!getApps().length) {
    initializeApp({
        credential: admin.credential.cert(serviceKey),
        databaseURL: "https://fintnesstrainer-default-rtdb.firebaseio.com/",
        databaseAuthVariableOverride: {
            uid: "fitnesscontent"
        }
    });
}

// app/api/test/route.js
const db = admin.database()

export { db }

