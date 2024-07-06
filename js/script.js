function cores() 
{
    let principal = document.querySelector('#iprincipal')

    principal.innerHTML = ''

    for (let index = 0; index < 9; index++) {
        let cor = document.createElement('div')
        randomColor(cor)
        principal.appendChild(cor)
    }
}

function randomColor(cor) 
{
    let red = parseInt(Math.random() * 256)
    let green = parseInt(Math.random() * 256)
    let blue = parseInt(Math.random() * 256)
    let hexadecimal = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`

    cor.style.background = `rgb(${red}, ${green}, ${blue})`
    cor.innerHTML = `${hexadecimal}`
}