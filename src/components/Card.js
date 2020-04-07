import React from "react"

import "./style/Card.css"
import "bootstrap/dist/css/bootstrap.min.css"

class Card extends React.Component{

    render() {
        const {titulo, infomercial, img} = this.props
        return (

            <div className="card mx-auto Fitness-Card">
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img} alt="" width="100px" className="img-fluid"/>
                        </div>
                        <div className="col-6 Fitness-Card-info text-white">
                            <h1 className="h5">{titulo}</h1>
                            {/*se modifica los estados*/}
                            <p>{infomercial}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default Card