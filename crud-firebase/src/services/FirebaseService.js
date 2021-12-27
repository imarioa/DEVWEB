import {
    collection,
    getDocs,
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
        
        const getEstudantes = async () => {
            let estudantes = []
            //const data = await getDocs(ref)
            onSnapshot(ref, (querySnapshot) => {
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
            });

            /*data.forEach((doc) => {
                const { nome, curso, IRA } = doc.data()
                estudantes.push(
                    {
                        _id: doc.id,
                        nome,
                        curso,
                        IRA
                    }
                )
            });*/
            console.log(estudantes)
            
        }
        getEstudantes()
    }
    static edit = (firestore, callback, id, estudante) => {

        const updateUser = async (id, estudante) => {
            const userDoc = doc(firestore, "estudantes", id);
            const newFields = { nome: estudante.nome, curso: estudante.curso, IRA: estudante.IRA };
            await updateDoc(userDoc, newFields);
        };

        updateUser(id, estudante)
        if(updateUser){
            callback("ok")
        }else{
            callback("nok")
        }

    }
    static create = (firestore, callback, estudante) => {
        let ref = collection(firestore, "estudantes")
        const createUser = async () => {
            await addDoc(ref,estudante);
        };
        createUser()
        if(createUser){
            callback("ok")
        }else{
            callback("nok")
        }
    }
    static retrieve = (firestore, callback, id) => {
        const userID = async (_id) => {
            const userDoc = doc(firestore, "estudantes", _id);
            const data = await getDoc(userDoc);
            if(data.exists()){
                const estudante = {
                    nome: data.data().nome,
                    curso: data.data().curso,
                    IRA: data.data().IRA

                }
                callback(estudante)
            }else{
                callback(null)
            }
        };
        userID(id)

    }
    static delete = (firestore, callback, id) => {
        const deleteUser = async (_id) => {
            const userDoc = doc(firestore, "estudantes", _id);
            await deleteDoc(userDoc);
        };
        if(deleteUser(id)){
            callback("ok")
        }else{
            callback("nok")
        }
    }

}