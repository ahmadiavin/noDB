import React, { Component } from "react";
import axios from "axios";
import RecipeList from "./RecipeList";

const apiUrl = "/api/recipes";

class GetRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      counter: 4,
      error: ""
    };
    this.getRecipes = this.getRecipes.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
  }

  componentDidMount() {
    this.getRecipes();
  }

  getRecipes = () => {
    axios
      .get(apiUrl)
      .then(res => {
        this.setState({
          recipes: res.data
        });
        console.log(apiUrl);
      })
      .catch(error => {
        console.log(error);
        this.setState({
          error: "An unknown error occurred."
        });
      });
  };

  updateRecipe(newRecipes) {
    this.setState({ recipes: newRecipes });
  }

  handleUpdate = update => {
    const id = update.id;
    axios.put(`${apiUrl}/${id}`, update).then(res => {
      this.setState({
        recipes: res.data
      });
    });
  };

  render() {
    const { recipes } = this.state;

    return (
      <section>
        {recipes.map((recipe, index) => (
          <RecipeList
            recipes={this.state.recipes}
            editable={this.state.editable}
            key={index}
            recipe={recipe}
            updateRecipe={this.updateRecipe}
            updateFn={this.handleUpdate}
          />
        ))}
      </section>
    );
  }
}

export default GetRecipes;
