// Importar Firebase y Firestore
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // 🔥 Agregamos Firestore

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAhSAaaYTDYQkrwCK07Z8WtAcr3Sspt2e0",
  authDomain: "control-y-ventas-de-marcos.firebaseapp.com",
  projectId: "control-y-ventas-de-marcos",
  storageBucket: "control-y-ventas-de-marcos.appspot.com", // 🔴 Corrección en el storageBucket
  messagingSenderId: "913321823299",
  appId: "1:913321823299:web:92aab0d3d7d1998cbb58f6",
  measurementId: "G-CSF6380W13"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // 🔥 Inicializar Firestore

export { db };
