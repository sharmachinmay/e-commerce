import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBO-hZIJkg3rdsB956ELPOAG2TP_uwAKYg",
    authDomain: "e-commerce-db-64f43.firebaseapp.com",
    databaseURL: "https://e-commerce-db-64f43.firebaseio.com",
    projectId: "e-commerce-db-64f43",
    storageBucket: "e-commerce-db-64f43.appspot.com",
    messagingSenderId: "665533919654",
    appId: "1:665533919654:web:4484de0de4f1982d545f67",
    measurementId: "G-EEEGWYZS7H"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    console.log(userRef);

    const snapShot = await userRef.get()
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData 
            })
            
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;