import React, { Component } from 'react'
import TableRow from './TableRow'

import FirebaseContext from '../utils/FirebaseContext'
import FirebaseService from '../services/FirebaseService'

const ListPage = () => (
    <FirebaseContext.Consumer>
        {contexto => <List firebase={contexto} />
        }
    </FirebaseContext.Consumer>
)

class List extends Component {

    constructor(props) {
        super(props)    
        this.state = { alunos: [], loading: false }
        this._isMounted = false
    }

    componentDidMount() {
        this._isMounted = true
        this.setState({ loading: true })

        FirebaseService.list(
            this.props.firebase.getFirestore(),
            (estudantes) => {
                if (estudantes) {
                    if (this._isMounted) {
                        this.setState({ alunos: estudantes, loading: false })
                    }
                }
            }
        )

    }
    componentWillUnmount(){
        this._isMounted = false
    }
    gerarConteudo() {
        if (this.state.loading) {
            return (
                <tr>
                    <td colSpan='6' style={{textAlign:"center"}}>
                        <div className="spinner-border" role="status">
                        
                        </div>
                    </td>

                </tr>

            )
        } else return this.montarTabela()
    }
    montarTabela() {
        if (!this.state.alunos) return
        return this.state.alunos.map(
            (aluno, i) => {
                return <TableRow aluno={aluno} key={i} firebase={this.props.firebase} />
            }
        )
    }

    render() {
        return (
            <div>
                <p>Listar alunos</p>
                <table className='table table-striped' style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Nome</td>
                            <td>Curso</td>
                            <td>IRA</td>
                            <td colSpan='2' style={{ textAlign: 'center' }}>Ações</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.gerarConteudo()}
                    </tbody>

                </table>
            </div>
        )
    }
}


export default ListPage