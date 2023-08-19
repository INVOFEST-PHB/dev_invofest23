// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth"
import "firebase/firestore"
// import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJA01Z9XvXPDf4Esupi5XLUMWLso-qrvA",
  authDomain: "onesec-395417.firebaseapp.com",
  projectId: "onesec-395417",
  storageBucket: "onesec-395417.appspot.com",
  messagingSenderId: "436856424762",
  appId: "1:436856424762:web:e0097e1de6fc36a0252803",
  measurementId: "G-RY8NFNR383"
};

// Initialize Firebase
const Fire = initializeApp(firebaseConfig);
const Auth = getAuth(Fire);
const provider = new GoogleAuthProvider();

const auth = Auth;
function SignUpUser(email,password){
createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('before data send : ', user)
  })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          // Email sudah terdaftar, tampilkan pesan kesalahan atau ambil tindakan yang sesuai
          console.error("Email already registered.");
        } else {
          // Penanganan error lainnya
          console.error("Registration error:", error);
        }
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
   
      });
    }
    const loginWithEmailAndPassword = async (email, password) => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
      } catch (error) {
        throw error;
      }
    };

    function SignIN(email,password) {
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    console.log("Login Berhasil");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);

  });
    }

    // Log out
const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error logging out:", error);
  }
};

// Check if a user is already authenticated
const checkAuthState = (callback) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      callback(user);
    } else {
      callback(null);
    }
  });
}
export { checkAuthState,logout,loginWithEmailAndPassword,SignIN,SignUpUser,Auth,provider,Fire};

