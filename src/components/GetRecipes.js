import React, {Component} from 'react';
import axios from 'axios';
import RecipeList from './RecipeList'


const apiUrl = '/api/recipes'

class GetRecipes extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [],
      counter: 4,

   

    };
    this.getRecipes = this.getRecipes.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
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

  updateRecipe(newRecipe) {
    this.setState({recipes: newRecipe});
  }

  handleUpdate = async recipe => {
    recipe.title = 'updated recipe';
    const {data} = await axios.put(apiUrl + '/' + recipe.id, recipe);
    const recipes = [...this.state.recipes];
    const index = recipes.indexOf(recipe);
    recipes[index] = recipe;
    this.setState({ recipes})
  }


  render() {
    
    const {recipes} = this.state;

    return (
      
        
        <section>

          {recipes.map((recipe, index) => (
          <RecipeList key={index} recipe={recipe} updateRecipe={this.updateRecipe} updateFn={this.handleUpdate} />
        ))}
        </section>

       

     
      
    )
  }


}

export default GetRecipes;
