import React, { Component } from 'react'


const defaultState = {
    id: ``,
    title: ``,
    ingredients: ``,
    instructions:``,
    img:``,
    showEdit: false
}

export default class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = defaultState
    }

    handleEditMode = () => {
        const { id, title, ingredients, instructions, img, } = this.props.entry
        this.setState({
            id: id,
            title: title,
            ingredients: ingredients,
            instructions: instructions,
            img: img,
            showEdit: !this.state.showEdit
        })
    }

    handleUserInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        let tempState = Object.values(this.state)
            for (let i = 0 ; i < tempState.length; i++) {
                if ( tempState[i] === '' ) {
                    return alert('Please add all fields')
                }
            } 
        this.props.updateFn(this.state)
        this.setState(defaultState)
    }

    handleNewEntry = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        const {title, ingredients, instructions, img, } = this.state
        return (
            <div>
                <button className="edit-btn" onClick={this.handleEditMode}>Edit</button>
                {this.state.showEdit &&
                    <div className="edit-container">
                        <input className="title-edit-input"name="title" onChange={this.handleUserInput} placeholder="Title" value={title}/>
                        <input className="ingredients-edit-input" name="ingredients" onChange={this.handleUserInput} placeholder="Ingredients" value={ingredients}/>
                        <input className="img-edit-input"name="img"onChange={this.handleUserInput} placeholder="Image" value={img}/>
                        <input className="instructions-edit-input"name="instructions" onChange={this.handleUserInput} placeholder="Instructions" value={instructions}/>
                        
                        <button className="submit-btn" onClick={this.handleSubmit}><strong>Submit Edit</strong></button>
                    </div>
                    
                }
            </div>
        )
    }
}
