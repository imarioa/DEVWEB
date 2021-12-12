import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


 
export default class List extends Component{
    
    constructor(props){
        super(props)
        this.state = {alunos:[]}
        this.apagarAlunoporID = this.apagarAlunoporID.bind(this)
    }

    apagarAlunoporID(id){
        let tempAlunos = this.state.alunos
        for(let i=0;i<tempAlunos.length;i++){
            if(tempAlunos[i]._id === id){
                tempAlunos.splice(i,1)
            } 
        }
        this.setState({alunos:tempAlunos})
    }

    componentDidMount(){
        axios.get('http://localhost:3002/estudantes/list')
        .then(
            (res)=>{
                this.setState({alunos:res.data})
            }
        )
        .catch(
            (erro)=>{
                console.log(erro)
            }
        )
    }
    montarTabela(){
        if(!this.state.alunos) return
        return this.state.alunos.map(
            (aluno,i)=>{
                return <TableRow aluno={aluno} key={i} apagarAlunoporID={this.apagarAlunoporID}/>
            }
        )
    }

    render(){
        return(
            <div>
                <p>Listar alunos</p>
                <table className='table table-striped' style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Nome</td>
                            <td>Curso</td>
                            <td>IRA</td>
                            <td colSpan='2' style={{textAlign:'center'}}>Ações</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.montarTabela()}
                    </tbody>

                </table>
            </div>
        )
    }
}
 
class TableRow extends Component{
    constructor(props){
        super(props)
        this.apagar = this.apagar.bind(this)
    }
    apagar(){
        axios.delete('http://localhost:3002/estudantes/delete/'+this.props.aluno._id)
        .then(
            (response)=>{
                alert('Aluno apagado!')
                this.props.apagarAlunoporID(this.props.aluno._id)
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )
    }

    render(){
        return(
            <tr>
                <td>{this.props.aluno._id}</td>
                <td>{this.props.aluno.nome}</td>
                <td>{this.props.aluno.curso}</td>
                <td>{this.props.aluno.IRA}</td>
                <td style={{textAlign:'center'}}>
                    <Link to={'/edit/'+this.props.aluno._id} className="btn btn-primary">Editar</Link>
                </td>
                <td style={{textAlign:'center'}}>
                    <button className="btn btn-danger" onClick={this.apagar}>Apagar</button>
                </td>
            </tr>
        )
    }
}