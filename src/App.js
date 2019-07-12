import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import RecipeList from './components/RecipeList';

const apiUrl = '/api/recipes'

class App extends Component {
  constructor(){
    super();
    this.state = {
      recipes: [],
      currIndex: 0,
    }
  }

  componentDidMount(){
    this.getRecipes()
  }

  getRecipes = () => {
    axios.get(apiUrl).then(res => {
      this.setState({
        recipes: res.data
      })
      console.log(apiUrl);
    })
  }


  render() {
    const {recipes} = this.state;

    return (
      <div className="body">
        <header className="header">
        <h1 className="recipe-list">Recipe List</h1>
        </header>
        <section>

          {recipes.map((recipe, index) => (
          <RecipeList key={index} recipe={recipe} updateRecipes={this.updateRecipes} />
        ))}
        </section>

        <footer className="footer">
         <p> It's a footer </p>
        </footer>

      </div>
      
    )
  }


}

export default App;
