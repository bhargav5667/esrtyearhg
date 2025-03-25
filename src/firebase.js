import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8OmtfyywQaWptL_ylWQ7I3DCCuwJ9BUE",
  authDomain: "ggggg-90ded.firebaseapp.com",
  projectId: "ggggg-90ded",
  storageBucket: "ggggg-90ded.firebasestorage.app",
  messagingSenderId: "963557657086",
  appId: "1:963557657086:web:add9bbd0de7823b0c218af",
  measurementId: "G-W22FMZ2V8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user; // Returns user details
  } catch (error) {
    console.error("Error signing in:", error);
  }
};

const logOut = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

export { auth, signInWithGoogle, logOut };
