import React from "react"
import hesh from "../images/hesh.png"
import "./style/Card.css"
import "bootstrap/dist/css/bootstrap.min.css"

class Card extends React.Component{

    render() {
        const {titulo, infomercial} = this.props
        return (

            <div className="card mx-auto Fitness-Card">
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={hesh} alt="" width="100px" className="img-fluid"/>
                        </div>
                        <div className="col-6 Fitness-Card-info text-white">
                            <h1>{titulo}</h1>
                            <p>{infomercial}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default Card