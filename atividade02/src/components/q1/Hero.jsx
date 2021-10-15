import Hero from '../images/baki.jpg'
export default (props) =>
    <div>
        <h1>{props.name}</h1>
        <img src={Hero} width="400" height="250" />
    </div>