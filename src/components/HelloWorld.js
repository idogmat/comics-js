import {computedNum} from "../api";

async function HelloWorld() {
    const div = document.createElement('div');
    const divBtn = document.createElement('div');
    const h1 = document.createElement('h1');
    const h1Text = document.createTextNode('Hello Webpack-Babel-Boilerplate!');
    const prevBtn = document.createElement('button');
    const randomBtn = document.createElement('button');
    const nextBtn = document.createElement('button');
    const imgBlock = document.createElement('div');

    div.className = 'main';
    div.id = 'main';
    divBtn.id = 'divBtn';
    prevBtn.id = 'prevBtn';
    randomBtn.id = 'randomBtn';
    nextBtn.id = 'nextBtn';
    imgBlock.id= 'imgBlock';
    // h1.appendChild();
    document.body.appendChild(div);
    div.appendChild(divBtn);
    div.appendChild(imgBlock);
    prevBtn.innerText='<=prevBtn'
    randomBtn.innerText='randomBtn'
    nextBtn.innerText='nextBtn=>'
    divBtn.appendChild(prevBtn);
    divBtn.appendChild(randomBtn);
    divBtn.appendChild(nextBtn);
///Navigate

    nextBtn.addEventListener('click',(evt)=> {
        console.log(evt)
        console.log('next')
        console.log(evt.target)
        evt.preventDefault()
        computedNum('next')
    })

    prevBtn.addEventListener('click',(evt)=> {
        console.log(evt)
        console.log('prev')
        console.log(evt.target)
        evt.preventDefault()
        computedNum('prev')
    })
    randomBtn.addEventListener('click',(evt)=>{
        console.log(evt)
        console.log('random')
        console.log(evt.target)
        evt.preventDefault()
        computedNum('random')
    })
}

export default HelloWorld;