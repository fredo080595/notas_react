// const element = document.createElement('h1')
// element.innerText = 'hola mundo'
// const container = document.getElementById('root')
// container.appendChild(element)

import React from "react"
import ReactDom from "react-dom"
import App from "./components/App.js"

const container = document.getElementById('root')

ReactDom.render(<App/>,container)

