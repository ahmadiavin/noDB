import React, { Component } from "react";
import axios from "axios";
import {FaPencilAlt} from 'react-icons/fa';


export default class UpdateRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
        ingredients: ``,
        instructions:``,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    const {ingredients, instructions} = this.state;
    axios
      .put("/api/recipes/" + this.props.recipe.id, { ingredients, instructions })
      .then(response => {
        this.props.updateRecipe(response.data);
      });
  };

  render() {
    return (
    
        
        <div className="edit-input">
          <input
          className="long-input"
            name='ingredients'
            placeholder="Change Ingredients"
            // value={this.props.recipe.ingredients}
            onChange={this.handleChange}
          />
          
          <input
           className="long-input"
            name='instructions'
            placeholder="Change Instructions"
            // value={this.props.recipe.instructions}
            onChange={this.handleChange}
          />
         
          <button  className="editButton" onClick={this.handleClick}> <FaPencilAlt/> Update</button>
        </div>
      
    );
  }
}
