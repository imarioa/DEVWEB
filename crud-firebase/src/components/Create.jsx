import React, {Component} from 'react'
import FirebaseContext from '../utils/FirebaseContext'
import FirebaseService from '../services/FirebaseService'


const CreatePage = () => (
    <FirebaseContext.Consumer>
        {firebase => <Create firebase={firebase} />}
    </FirebaseContext.Consumer>
)


class Create extends Component{
    constructor(props){
        super(props)
        this.state = {nome:'',curso:'',IRA:0}

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setIRA = this.setIRA.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
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

        const novoAluno = {
            nome:this.state.nome, 
            curso:this.state.curso, 
            IRA:this.state.IRA}

        FirebaseService.create(this.props.firebase.getFirestore(),
        (msg) => {
            console.log(msg)
        },
        novoAluno)
       

        this.setState({nome:''})
        this.setState({curso:''})
        this.setState({IRA:0})
    }
    render(){
        return(
            <div style={{marginTop: 10}}>
                <h3>Criar estudante</h3>
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
                        <input style={{marginTop: 10}} type="submit" className="btn btn-primary" value="Criar"/>
                    </div> 
                </form>
                
            </div> 
        )
    }
}
export default CreatePage