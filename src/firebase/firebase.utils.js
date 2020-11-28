import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBEJYBWKKh5_a2NmAV1-o_9Lfh13qTWL6w",
    authDomain: "crwn-db-886be.firebaseapp.com",
    databaseURL: "https://crwn-db-886be.firebaseio.com",
    projectId: "crwn-db-886be",
    storageBucket: "crwn-db-886be.appspot.com",
    messagingSenderId: "1075366278961",
    appId: "1:1075366278961:web:d2bb7d7e93efd079072210"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;

export const createUserProfileDoc = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userDocRef = firestore.doc(`users/${userAuth.uid}`);

    const userDoc = await userDocRef.get();

    if (!userDoc.exists) {
        const { displayName, email } = userAuth;
        try {
            await userDocRef.set({
                createdAt: new Date(),
                displayName,
                email,
                ...additionalData
            })
        } catch(error) {
            console.error('Error creating user', error);
        }
    }
    
    return userDocRef;
}
