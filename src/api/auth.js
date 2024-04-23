import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";


export const logout = async () => {
  signOut(auth)
    .then(() => {
      console.log("Sign-out successful.");
      localStorage.removeItem("authUser");
    })
    .catch((error) => {
      console.error(error);
    });
};

export const signIn = async (email, password) => {

  signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
// Signed in 
const user = userCredential.user;
localStorage.setItem("authUser", user);
// ...
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
console.log("Error code: " + errorCode + " Message: " + errorMessage);
});

}
