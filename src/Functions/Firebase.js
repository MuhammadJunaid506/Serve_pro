import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyBdl98l9XoTiJyFW7gEbkd1GlVYAxXGFTs",
  authDomain: "nbhoodsmog-948eb.firebaseapp.com",
  projectId: "nbhoodsmog-948eb",
  storageBucket: "nbhoodsmog-948eb.appspot.com",
  messagingSenderId: "62679882278",
  appId: "1:62679882278:web:0330fd33f6a644a2ade4e7",
  measurementId: "G-SWMSWLSL6Q"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firestore = getFirestore(app);

export { firestore };
