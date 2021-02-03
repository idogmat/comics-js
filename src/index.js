import HelloWorld from 'components/HelloWorld';
import 'main.css';
import {computedNum} from "./api";

HelloWorld();
window.onpopstate = () => {
    console.log('dsfdsf')
}
computedNum('random')


function checkPath(){
    console.log(window.location.host)
    console.log(window.location.pathname)

}
checkPath()
