// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth"
import { Database, getDatabase, onValue, ref } from "firebase/database";
import "firebase/firestore"
// import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  measurementId:  process.env.REACT_APP_MESSAGING_ID,
  appId: process.env.REACT_APP_APP_ID,
  databaseURL: process.env.DATABASE_URL
};
// Initialize Firebase
const Fire = initializeApp(firebaseConfig);
const Auth = getAuth(Fire);
// const database = getDatabase(Fire);
const provider = new GoogleAuthProvider();

const auth = Auth;
function SignUpUser(email,password){
createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const userdata= {
     email: user.email,
     uid: user.uid,
     refreshToken: user.refreshToken,
     emailVerified: user.emailVerified,
    }
    console.log('before data send : ', userdata)
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
        const userdata= {
          email: userCredential.email,
          uid: userCredential.uid,
          refreshToken: userCredential.refreshToken,
          emailVerified: userCredential.emailVerified,
         }
         console.log(userdata);
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

export const addBiodataAPI = (data) =>{
  Database.ref('biodata/'+data.userId).set({
    username: data.username,
    lahir: data.lahir,
    alamat: data.alamat,
    noHp: data.noHp,
    status: data.status,
    pendidikan: data.pendidikan,
    jurusan : data.jurusan,
  })
}



export const getDataAPI = (userId) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    const biodataRef = ref(db, "biodata/" + userId);
    // Attach an event listener to listen for changes in the data
    onValue(biodataRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('get data:', data)
        // Resolve the Promise with the retrieved biodata
        const dataObject = [];
         Object.keys(snapshot.val()).map(key=>{
          dataObject.push({
          id : key,
          dataObject : snapshot.val()[key]
        })
     });
        dispatch({type: 'SET_BIODATA', value: dataObject})
        resolve(data);
      } else {
        // Reject the Promise with an error message
        reject("No data found for the user");
      }
    });
  });
};













export { checkAuthState,logout,loginWithEmailAndPassword,SignIN,SignUpUser,Auth,provider,Fire};

 