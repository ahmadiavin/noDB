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
      
        
        <section>

          {recipes.map((recipe, index) => (
          <RecipeList key={index} recipe={recipe} updateRecipes={this.updateRecipes} />
        ))}
        </section>

       

     
      
    )
  }


}

export default GetRecipes;
