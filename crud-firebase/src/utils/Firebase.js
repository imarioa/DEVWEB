import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import firebase_key from '../keys/firebase_keys'



export default class Firebase{
    constructor(){
        const firestore = initializeApp(firebase_key)
    }

    getFirestore(){
        return getFirestore(this.firestore)
    }

}