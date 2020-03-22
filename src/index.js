// const element = document.createElement('h1')
// element.innerText = 'hola mundo'
// const container = document.getElementById('root')
// container.appendChild(element)

import React from "react"
import ReactDom from "react-dom"
import Card from "./components/Card";

const container = document.getElementById('root')

ReactDom.render(<Card  titulo = 'Hesh' infomercial = 'Como Olvidar que estos son los mejores audifonos' />,container)

