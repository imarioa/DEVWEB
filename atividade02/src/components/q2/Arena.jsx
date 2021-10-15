import Hero from './Hero'
import Enemy from './Enemy'
import Baki from '../images/baki.jpg'
import Yujiro from '../images/yujiro.jpeg'


export default (props) =>
    <div>
        <Hero name = 'Baki' img={Baki}/>
        <Enemy name = 'Yujiro' img={Yujiro}/>
    </div>