import React, { Component } from "react";
import axios from "axios";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
// import Edit from "./Edit";
import UpdateRecipe from "./UpdateRecipe";
const apiUrl = "/api/recipes";

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      editable: false
    };
  }

  render() {
    // const recipeEdit = this.props.recipes.map(entry => {
    //   return (
    //     <div className="entry-container" key={entry.id}>
    //       {<Edit updateFn={this.props.updateFn} entry={entry} />}
    //     </div>
    //   );
    // });

    return (
      <div className="container">
        <div className="row">
          <div key={this.props.recipe.title} className="recipe__title">
            <div className="recipes__box">
              <img
                className="recipe__box-img"
                src={this.props.recipe.img}
                alt={this.props.recipe.title}
              />
              <div className="recipe__text">
                <h5 className="recipes__title">{this.props.recipe.title}</h5>
                <button
                  className="recipe_buttons"
                  onClick={() =>
                    this.setState({ isExpanded: !this.state.isExpanded })
                  }
                >
                  Show Recipe
                </button>
                {this.state.isExpanded === true ? (
                  <div className="hidden">
                    <p className="recipes__subtitle">
                      {" "}
                      Ingredients: <span>{this.props.recipe.ingredients}</span>
                    </p>
                    <p className="recipes__subtitle">
                      {" "}
                      Instructions:{" "}
                      <span>{this.props.recipe.instructions}</span>
                    </p>
                    <button
                      className="deleteButton"
                      onClick={() => {
                        axios
                          .delete(apiUrl + "/:" + this.props.recipe.id)
                          .then(response => {
                            this.props.updateRecipe(response.data);
                          });
                      }}
                    >
                      Delete
                    </button>
                    <FaLongArrowAltLeft /> || <FaLongArrowAltRight />
                    <button
                      className="editButton"
                      onClick={() =>
                        this.setState({ editable: !this.state.editable })
                      }
                    >
                      Edit
                    </button>
                    {this.state.editable === true ? (
                      <div className="hidden-input">
                        <br />
                        <UpdateRecipe
                          recipes={this.props.recipes}
                          key={this.props.index}
                          recipe={this.props.recipe}
                          updateRecipe={this.props.updateRecipe}
                          updateFn={this.props.handleUpdate}
                        />
                      </div>
                    ) : null}
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
