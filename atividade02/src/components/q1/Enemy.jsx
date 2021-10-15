import Enemy from '../images/yujiro.jpeg'
export default (props) =>
    <div>
        <h1>{props.name}</h1>
        <img src={Enemy} width="400" height="250" />
    </div>