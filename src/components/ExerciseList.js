import React from "react"
import Card from "./Card";

const ExerciseList = ({exercise})=> (
    <div>
        {
            exercise.map((exercise)=>{
                return (<Card key = {exercise.id} titulo = {exercise.title} infomercial = {exercise.description} img={exercise.img} />)
            })
        }
    </div>
)



/*
function ExerciseList(props) {

    return (<div>
                {
                    props.exercise.map((exercise)=>{
                        return (<Card  titulo = {exercise.title} infomercial = {exercise.description} img={exercise.img} />)
                    })
                }
             </div>)

}
*/

export default ExerciseList