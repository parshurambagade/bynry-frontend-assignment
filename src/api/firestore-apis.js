import { collection, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";


export const getAllUsers = async () => {

    const querySnapshot = await getDocs(collection(db, "users"));

    let usersData = {};

    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
        usersData[doc.id] = doc.data();
    });
    

    localStorage.setItem('users', JSON.stringify(usersData));

    return usersData;
}

export const getSingleUser = async (id) => {

    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        // console.log(docSnap.data())
    return (docSnap.data());
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such user!");
    }

}