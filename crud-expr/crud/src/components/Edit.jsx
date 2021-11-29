import React, {Component} from 'react'
import axios from 'axios'


 
export default class Edit extends Component{
    constructor(props){
        super(props)
        this.state = {nome:'',curso:'',IRA:0}

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setIRA = this.setIRA.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        axios.get('http://localhost:3002/alunos/retrieve/'+this.props.match?.params?.id)
        .then(
            (response)=>{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                this.setState({      
                        post: response.data,                                                                                                                                                                                          
                        nome:response.data.nome,
                        curso:response.data.curso,
                        IRA:response.data.IRA
                    })
            })
        .catch(
            (erro)=>{
                console.log(erro)
            }
        )
    }
    
    setNome(e){
        this.setState({nome:e.target.value})
    }
    setCurso(e){
        this.setState({curso:e.target.value})
    }
    setIRA(e){
        this.setState({IRA:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        //alert('Nome: ' + this.state.nome + ' Curso: ' + this.state.curso + ' IRA: ' + this.state.ira)
        const alunoEditado = {nome:this.state.nome, curso:this.state.curso, ira:this.state.IRA}
        axios.put('http://localhost:3002/alunos/update/'+this.props.match.params.id, alunoEditado) 
        .then(
            (response)=>{
                alert('Aluno: ' + response.data.nome + ' atualizado com sucesso!')
                this.props.history.push('/list')
            }
        )
        .catch(
            (erro)=>{
                console.log(erro)
            }
        )

        this.setState({nome:''})
        this.setState({curso:''})
        this.setState({IRA:0})
    }
    render(){
        return(
            <div style={{marginTop: 10}}>
                <h3>Editar estudante</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label style={{marginTop: 10}}> Nome: </label>
                        <input style={{marginTop: 10}} type="text" className="form-control" placeholder="Digite seu nome"
                            value={this.state.nome} onChange={this.setNome}
                        />
                    </div> 
                    <div className="form-group">
                        <label style={{marginTop: 10}} >Curso: </label>
                        <input  style={{marginTop: 10}} type="text" className="form-control" placeholder="Digite seu curso"
                            value={this.state.curso} onChange={this.setCurso}
                        />
                    </div> 
                    <div className="form-group">
                        <label style={{marginTop: 10}} >IRA: </label>
                        <input style={{marginTop: 10}} type="text" className="form-control" placeholder="Digite seu IRA"
                            value={this.state.IRA} onChange={this.setIRA}
                        />
                    </div> 
                    <div className="form-group">
                        <input style={{marginTop: 10}} type="submit" className="btn btn-primary" value="Editar"/>
                    </div> 
                </form>
                
            </div> 
        )
    }
}