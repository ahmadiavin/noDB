import React, { Component } from "react";
import axios from "axios";

const apiUrl = "/api/recipes";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 3,
      title: "",
      ingredients: "",
      instructions: "",
      img: ""
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
              img: this.state.img,
              id: (this.state.id + 1).toString()
            })
            .then(response => {
              console.log(response.data);

              this.props.changeView("recipes");
              this.setState({
                id: this.state.id + 1
              });
            })
            .catch(error => {
              console.log(error);
            });
        }}
      >
        <div className="recipe-input">
          <input
            name="title"
            onChange={this.handleChange}
            placeholder="Title"
          />
          <input name="img" onChange={this.handleChange} placeholder="Image" />
          <input
            name="ingredients"
            onChange={this.handleChange}
            placeholder="Ingredients"
          />
          <input
            name="instructions"
            onChange={this.handleChange}
            placeholder="Instructions"
          />
          <button className="editButton">Submit</button>
        </div>
      </form>
    );
  }
}

export default Add;
