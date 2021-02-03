import HelloWorld from "../components/HelloWorld";

const proxy = 'https://cors-anywhere.herokuapp.com/'
const url = 'http://xkcd.com/'
const elementId = Math.floor(Math.random() * 1555) + 1;
const elementPosition = 2
export function computedNum(type){
    let pathId = window.location.pathname
    let imgId = pathId.slice(1)
    switch (type) {
        case 'next':
            imgId= Number(imgId)+1
            pathId = '/'+imgId
            console.log(typeof imgId)
            console.log(typeof pathId)
            onNavigate(pathId,imgId)
            break;
        case 'prev':
            imgId= Number(imgId)-1
            pathId = '/'+imgId
            console.log(typeof imgId)
            console.log(typeof pathId)
            onNavigate(pathId,imgId)
            break;
        case 'random':
            imgId= Number(elementId)
            pathId = '/'+imgId
            onNavigate(pathId,imgId)
            break;
    }

}
export function fetchExam(id = 736) {
    console.log(proxy + url + `${id}/info.0.json`)
    fetch(proxy + url + `${id}/info.0.json`)
        .then(result => result.json())
        .then(data => {
            createImg(data)
        })
}
function createImg(data) {
    console.log(data)
    let newDiv = document.createElement("div");
    let allElement = data
    newDiv.append(allElement.num)
    let img = document.createElement('img')
    img.src = allElement.img
    document.getElementById('imgBlock').append(img)
    document.body.append(allElement.num)
}
const onNavigate = (pathname,imgId) => {
    document.body.innerHTML = ''
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )

    HelloWorld()
    fetchExam(imgId)
}
// const routes = ()=>{
//
// };

// window.onpopstate = () => {
//     rootDiv.innerHTML = routes[window.location.pathname]
// }