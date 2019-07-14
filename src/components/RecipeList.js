import React, { Component } from "react";
import axios from "axios";

const apiUrl = "/api/recipes";

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div
            key={this.props.recipe.title}
            className="recipe-title"
            
          >
            <div className="recipes_box">
              <img
                className="recipe_box-img"
                src={this.props.recipe.img}
                alt={this.props.recipe.title}
              />
              <div className="recipe_text">
                <h5 className="recipes_title">{this.props.recipe.title}</h5>
                <button
                  onClick={() =>
                    this.setState({ isExpanded: !this.state.isExpanded })
                  }
                >
                  Show Recipe
                </button>
                {this.state.isExpanded === true ? (
                  <div className="hidden">
                    <p className="recipes_subtitle">
                      {" "}
                      Ingredients: <span>{this.props.recipe.ingredients}></span>
                    </p>
                    <p className="recipes_subtitle">
                      {" "}
                      Instructions:{" "}
                      <span>{this.props.recipe.instructions}</span>
                    </p>
                    <button
                      onClick={() => {
                        axios
                          .delete(apiUrl +'/:' + this.props.recipe.id)
                          .then(response => {
                            this.props.updateRecipe(response.data);
                          });
                      }}
                    >
                      Delete
                    </button>

                    <button>Edit</button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeList;
