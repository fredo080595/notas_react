import React from "react"
import {Link} from "react-router-dom"

const NewExercise= ()=>
     (
        <div>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <Link to="/exercise/new">
                            <img src="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d" alt=""/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )





/*
function NewExercise() {
    return (
        <div>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <Link to="/exercise/new">
                            <img src="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d" alt=""/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}
*/

export default NewExercise