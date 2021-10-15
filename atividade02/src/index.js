import React from 'react';
import ReactDOM from 'react-dom';
//Questão 1
//import Arena from './components/q1/Arena'
//Questão 2
//import Arena from './components/q2/Arena'
//Questão 3
import World from './components/q3/World'
import Arena from './components/q3/Arena'

const root = document.getElementById('root');
/*Questão 1 e Questão 2*///ReactDOM.render(<Arena/>, root);
/*Questão 3*/ReactDOM.render(
    <World>
        <Arena />
        <Arena />
        <Arena />
    </World>
    , root);

