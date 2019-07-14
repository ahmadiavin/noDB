import React, { Component } from "react";
import axios from "axios";

const apiUrl = '/api/recipes'

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: [],
      title: "",
      ingredients: "",
      instructions: "",
      img:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.baseState = this.state;
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form
        style={{
          display: "flex",
          flexDirection: "column"
        }}
        onSubmit={e => {
          e.preventDefault();
          axios
            .post(apiUrl, {
              title: this.state.title,
              ingredients: this.state.ingredients,
              instructions: this.state.instructions,
              img: this.state.img
            })
            .then(response => {
              console.log(response.data);
              
              this.props.changeView("recipes");
            })
            .catch(error => {
              console.log(error);
            });
        }}
      >
          <div class="recipe-input">
        <input name="title" onChange={this.handleChange} placeholder="Title" />
        <input name="img" onChange={this.handleChange} placeholder="Image" />
        <input name="ingredients" onChange={this.handleChange} placeholder="Ingredients" />
        <input name="instructions" onChange={this.handleChange} placeholder="Instructions" />
        </div>
        <div class="ui buttons">
        <button class="ui button" type="reset" onChange={this.baseState}>Cancel</button>
        <div class="or"></div>
        <button class="ui positive button" type="submit">Submit</button>
        </div>
        
      </form>
     
    );
  }
}

export default Add;
