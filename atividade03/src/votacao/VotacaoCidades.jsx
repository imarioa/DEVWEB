import React, { Component } from 'react'

const cidadeList = ['Maracanaú','Fortaleza','Maranguape','Quixadá']

export default class Votacao extends Component {

    constructor(props) {
        super(props)
        this.state = { maraca: 0, fort: 0, maran: 0, qxd: 0, maior: 0, menor: 0, soma:0 }
    }


    componentDidUpdate(prevProps,prevState) {
        if(prevState.maraca !== this.state.maraca ||
           prevState.fort !== this.state.fort ||
           prevState.maran !== this.state.maran ||
           prevState.qxd !== this.state.qxd){
            
            const cidades = [this.state.maraca, this.state.fort, this.state.maran, this.state.qxd]
            let maiorVot = this.state.maior
            for (let i = 0; i < cidades.length; i++) {
                if (cidades[i] > maiorVot)
                    maiorVot = cidades[i]
            }
            this.setState({maior:maiorVot})

            let menorVot = this.state.maior
            for (let i = 0; i < cidades.length; i++) {
                if (cidades[i] < menorVot)
                    menorVot = cidades[i]
            }
            this.setState({menor:menorVot})
            this.setState({soma:this.state.soma+1})
        }
        
    }

    maisVotadas(){
        let saida = ''
        const cidades = [this.state.maraca, this.state.fort, this.state.maran, this.state.qxd]
        for (let i = 0; i < cidades.length; i++) {
            if(cidades[i]===this.state.maior) saida+=cidadeList[i]+' '
        }
        return saida
    }

    menosVotadas(){
        let saida = ''
        const cidades = [this.state.maraca, this.state.fort, this.state.maran, this.state.qxd]
        for (let i = 0; i < cidades.length; i++) {
            if(cidades[i]===this.state.menor) saida+=cidadeList[i]+' '
        }
        return saida
    }

    render() {

        return (
            <div>
                <h2>Maracanaú: {this.state.maraca}</h2>
                <h2>Fortaleza: {this.state.fort}</h2>
                <h2>Maranguape: {this.state.maran}</h2>
                <h2>Quixadá: {this.state.qxd}</h2>
                <h4>Maior: {this.state.maior} : {this.maisVotadas()}</h4>
                <h4>Menor: {this.state.menor} : {this.menosVotadas()}</h4>
                <h4>Soma total de votos: {this.state.soma}</h4>
                <button onClick={() => this.setState({ maraca: this.state.maraca + 1 })} >Votar em Maracanaú</button>
                <button onClick={() => this.setState({ fort: this.state.fort + 1 })}>Votar em Fortaleza</button>
                <button onClick={() => this.setState({ maran: this.state.maran + 1 })}>Votar em Maranguape</button>
                <button onClick={() => this.setState({ qxd: this.state.qxd + 1 })}>Votar em Quixadá</button>
            </div>
        )
    }
}

