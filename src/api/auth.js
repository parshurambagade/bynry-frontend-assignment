import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";


export const logout = async () => {
  signOut(auth)
    .then(() => {
      console.log("Sign-out successful.");
      localStorage.removeItem("user");
    })
    .catch((error) => {
      console.error(error);
    });
};
