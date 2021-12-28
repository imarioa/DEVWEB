import {
    collection,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    getDoc,
    onSnapshot
} from "firebase/firestore";


export default class FirebaseService {

    static list = (firestore, callback) => {
        let ref = collection(firestore, "estudantes")
        let estudantes = []
        onSnapshot(ref, (querySnapshot) => {
             estudantes = []
             querySnapshot.forEach((doc) => {
                 const { nome, curso, IRA } = doc.data()
                 estudantes.push(
                     {
                         _id: doc.id,
                         nome,
                         curso,
                         IRA
                     }
                 )
             });
            callback(estudantes)
            console.log(estudantes)
         });
    }
    static edit = async (firestore, callback, id, estudante) => {
        const userDoc = doc(firestore, "estudantes", id);
        const newFields = { nome: estudante.nome, curso: estudante.curso, IRA: estudante.IRA };
        await updateDoc(userDoc, newFields)
            .then(() => {
                callback("ok")
            })
            .catch(() => {
                callback("nok")
            });
    }
    static create = async (firestore, callback, estudante) => {
        let ref = collection(firestore, "estudantes")
        await addDoc(ref, estudante)
            .then(() => {
                callback("ok")
            })
            .catch(() => {
                callback("nok")
            });
    }
    static retrieve = async (firestore, callback, id) => {
        const userDoc = doc(firestore, "estudantes", id);
        const data = await getDoc(userDoc);
        if (data.exists()) {
            const estudante = {
                nome: data.data().nome,
                curso: data.data().curso,
                IRA: data.data().IRA

            }
            callback(estudante)
        } else {
            callback(null)
        }
    }
    static delete = async (firestore, callback, id) => {
        const userDoc = doc(firestore, "estudantes", id);
        await deleteDoc(userDoc)
            .then(() => {
                callback("ok")
            })
            .catch(() => {
                callback("nok")
            });
    }
}