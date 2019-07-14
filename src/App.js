import React, { Component } from "react";
import axios from "axios";
import Popup from 'reactjs-popup';
import "./App.css";
import Footer from "./components/Footer";
import GetRecipes from "./components/GetRecipes";
import AddRecipe from "./components/AddRecipe"




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
        <header  class="ui red header" className="header">
        <h2 class="ui header">Recipe List</h2>

          <nav>
            <Popup trigger={<button
              className={this.state.view === "recipes"}
              onClick={() => this.setState({ view: "recipes" })}
            >
              Home
            </button>} position="top left"> <div>go back to main page?</div></Popup> 
            
            <button
              className={this.state.view === "addRecipes" ? "current" : ""}
              onClick={() => this.setState({ view: "addRecipes" })}
            >
            Add Recipe
            </button>
            
          </nav>
        </header>
        {this.state.view === "recipes" ? (
          <GetRecipes />
        ) : (
          <AddRecipe changeView={this.changeView} />
        )}
       

      

        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
