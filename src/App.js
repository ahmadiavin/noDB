import React, { Component } from "react";
import axios from "axios";
import Popup from 'reactjs-popup';
import "./App.css";
import RecipeList from "./components/RecipeList";
import Footer from "./components/Footer";
import GetRecipes from "./components/GetRecipes";


const apiUrl = "/api/recipes";

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
      <div className="body">
        <header className="header">
          <h1 className="recipe-list">Recipe List</h1>

          <nav>
            <Popup trigger={<button
              className={this.state.view === "recipes" ? "current" : ""}
              onClick={() => this.setState({ view: "recipes" })}
            >
              Recipes
            </button>} position="top left"> <div>check out these recipes!</div></Popup> 
            <button
              className={this.state.view === "stuff" ? "current" : ""}
              onClick={() => this.setState({ view: "stuff" })}
            >
              Add Recipe
            </button>
            <button onClick={() => this.setState({ view: "more stuff" })}>
            Default 
            </button>
          </nav>
        </header>
        <GetRecipes />

      

        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
