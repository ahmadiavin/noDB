import React, { Component } from "react";
// import axios from "axios";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import GetRecipes from "./components/GetRecipes";
import AddRecipe from "./components/AddRecipe";
import { FaHome } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { FaUtensilSpoon } from "react-icons/fa";

// import Edit from "./components/Edit";

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "recipes"
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(newView) {
    this.setState({ view: newView });
  }

  render() {
    return (
      <div className="mainbody">
        <Header />
        <nav className="navbuttons">
          <button
            // className={this.state.view === "recipes" ? "current" : ""}
            onClick={() => this.setState({ view: "recipes" })}
          >
            <FaHome />
            Recipes
          </button>

          <button
            // className={this.state.view === "addRecipes" ? "current" : ""}
            onClick={() => this.setState({ view: "addRecipe" })}
          >
            <FaPlusSquare /> <FaUtensilSpoon /> Add Recipe
          </button>
          {/* <button
              
              onClick={() => this.setState({ view: "editRecipe" })}
            >
            < FaPencilAlt/> Edit Recipe
            </button> */}
        </nav>

        {/* {this.state.view === "recipes" ? (
          <GetRecipes />
          
        ) : (
          <AddRecipe changeView={this.changeView} />
          
        )
         
        } */}
        {this.state.view === "recipes" ? <GetRecipes /> : null}
        {this.state.view === "addRecipe" ? (
          <AddRecipe changeView={this.changeView} />
        ) : null}
        {/* {this.state.view === "editRecipe" ? <Edit  updateFn={this.props.updateFn} entry={this.props.entry} changeView={this.changeView}/> : null} */}

        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
