import React from "react";
import './style/Welcome.css'


const Welcome = ({nombreUsuario}) => (
    <div className="container">
        <div className="Fitness-User-Info">
            <h1>Hello  {nombreUsuario}!</h1>
            <p>Espero que compres unos audifonos</p>
        </div>
    </div>
)


/*function Welcome(props) {

    return (<div className="container">
                <div className="Fitness-User-Info">
                    <h1>Hello  {props.nombreUsuario}</h1>
                    <p>Espero que compres unos audifonos</p>
                </div>
            </div>)

}*/

export default Welcome