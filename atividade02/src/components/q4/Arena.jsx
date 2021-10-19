import Hero from './Hero'
import Enemy from './Enemy'
import React from 'react'

export default (props) =>
    <div>
        <h1>{props.arena}</h1>
        {React.Children.map(props.children, personagem => {
            return React.cloneElement(personagem, {...personagem});
        })}
        {/*<Hero name="Bachi"/>
        <Enemy name="Yujiro"/>*/}
        
    </div>