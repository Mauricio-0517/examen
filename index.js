import { datos_cartas } from './variables.js'
let n = 0;    

const createCardNode = ()=>{
const cardCardPrimary = document.createElement("div")
cardCardPrimary.className =  datos_cartas[n].clase;

const cardHeader = document.createElement("div")
cardHeader.className = "card__header"

const cardHeaderImage = document.createElement("div")
cardHeaderImage.className = "card__header--image"


const imagen = document.createElement('img');
imagen.src=datos_cartas[n].imagen;

const cardHeaderInfo = document.createElement("div")
cardHeaderInfo.className = "card__header--info"

const name = document.createElement("h3")
const name_1 = document.createTextNode(datos_cartas[n].name);

const ocupacion = document.createElement("p")
const ocupacion_1 = document.createTextNode(datos_cartas[n].ocupation);

const cardBody = document.createElement("div")
cardBody.className = "card__body"

const titulo = document.createElement("h4")
const titulo_1 = document.createTextNode(datos_cartas[n].titulo);

const description = document.createElement("p")
const description_1 = document.createTextNode(datos_cartas[n].description);



cardCardPrimary.appendChild(cardHeader)
cardCardPrimary.appendChild(cardBody)
cardHeader.appendChild(cardHeaderImage)
cardHeader.appendChild(cardHeaderInfo)
cardHeaderImage.appendChild(imagen)
cardHeader.appendChild(name)
cardHeader.appendChild(ocupacion)
cardBody.appendChild(titulo)
cardBody.appendChild(description)
name.appendChild(name_1)
ocupacion.appendChild(ocupacion_1)
titulo.appendChild(titulo_1)
description.appendChild(description_1)


return cardCardPrimary    
}


const mountNode = document.querySelector(".container")
const addCardButton = document.querySelector('.crear')

const addCard=()=>{
    mountNode.appendChild(createCardNode())
    n++;
}

addCardButton.addEventListener('click', addCard)