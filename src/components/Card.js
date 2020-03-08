import React from "react"
import heshImg from "../images/hesh.jpg"
//Creacion de un componente en react

class Card extends React.Component{

    render() {
        return (
            <div>
                <div>
                    <img src={heshImg} />
                </div>
                <div>
                    <h1>Guias tecnicas</h1>
                    <p>Aprende una asombrosas tecnicas de ejercicio en la calle</p>
                </div>
            </div>
        )

    }

}

export default Card //importante al exportar un componente