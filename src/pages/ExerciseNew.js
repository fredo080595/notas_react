import React from "react"

class ExerciseNew extends React.Component{

    state = {}

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })

    }


    render() {

        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="">Exercise</label>
                                    <input type="text" className="form-control"  name="title" onChange={this.handleChange}  value={this.state.title}/>
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="">Description</label>
                                    <input type="text" className="form-control" name="description" onChange={this.handleChange} value={this.state.description}/>
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="">Img</label>
                                    <input type="text" className="form-control" name="img" onChange={this.handleChange} value={this.state.img}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="">left color</label>
                                    <input type="text" className="form-control" name="left" onChange={this.handleChange} value={this.state.left}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor=""> rightColor</label>
                                    <input type="text" className="form-control" name="right" onChange={this.handleChange} value={this.state.right}/>
                                </div>
                                <button className="btn btn-primary" >
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )

    }
}

export default ExerciseNew