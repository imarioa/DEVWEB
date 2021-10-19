import React from 'react';
import ReactDOM from 'react-dom';
//Questão 1
//import Arena from './components/q1/Arena'
//Questão 2
//import Arena from './components/q2/Arena'
//Questão 3
//import World from './components/q3/World'
//import Arena from './components/q3/Arena'
//Questão 4
import World from './components/q4/World'
import Arena from './components/q4/Arena'
import Hero from './components/q4/Hero'
import Enemy from './components/q4/Enemy'
import Baki from './components/images/baki.jpg'
import Yujiro from './components/images/yujiro.jpeg'
import Saitama from './components/images/saitama.jpg'
import Garou from './components/images/garou.png'

const root = document.getElementById('root');
/*Questão 1 e Questão 2*///ReactDOM.render(<Arena/>, root);
/*Questão 3*///ReactDOM.render(<World> <Arena/> <Arena/> <Arena/> </World>,root);

/*Questão 4*/ ReactDOM.render(
    <World>
        <Arena arena="Praça do Leão">
            <Hero name="Baki" img={Baki}/>
            <Enemy name="Yujiro" img={Yujiro}/>
        </Arena> 
        <Arena arena="Praça do Chalé">
            <Hero name="Saitama" img={Saitama}/>
            <Enemy name="Garou" img={Garou}/>
        </Arena> 
    </World>
        
    , root);

