const AlunoModel = require('../models/Alunos')

let Alunos = [
    {_id:0,nome:'Imario',curso:'EC',IRA:8},
    {_id:1,nome:'Chico Bento',curso:'SI',IRA:9.5},
    {_id:2,nome:'Luluzinha',curso:'DD',IRA:8.8}
]
let _id = 0

class AlunoService{

    static register(data){
        let aluno = new AlunoModel(
            _id++,
            data.nome,
            data.curso,
            data.IRA
        )
        Alunos.push(aluno)
        return aluno
    }

    static list(){
        return Alunos;
    }

    static update(_id,data){
        for(let e of Alunos){ 
            if(e._id == _id){
                e.nome = data.nome
                e.curso = data.curso
                e.IRA = data.IRA
                return e
            }
        }
        return null
    }

    static delete(_id){
        for(let i=0;i<Alunos.length;i++){
            if(Alunos[i]._id == _id){
                Alunos.splice(i,1)
                return true
            }
        }
        return false
    }

    static retrieve(_id){
        for(let i=0;i<Alunos.length;i++){
            if(Alunos[i]._id == _id){
                return Alunos[i]
            }
        }
        return {}
    }

}

module.exports = AlunoService