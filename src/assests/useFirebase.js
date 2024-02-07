import { initializeApp } from "firebase/app";
import { getAuth  } from 'firebase/auth'
import { getFirestore  } from 'firebase/firestore'

const useFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyD-GLBihAKYgw3oqf86j5eN-2ybEFi-9Zw",
    authDomain: "sie-website-9f188.firebaseapp.com",
    projectId: "sie-website-9f188",
    storageBucket: "sie-website-9f188.appspot.com",
    messagingSenderId: "525438076254",
    appId: "1:525438076254:web:b85ac5a43047edf2847bcf"
  };
    
    
    // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app)
      const db = getFirestore(app)


    return { app,auth,db };
}
export default useFirebase