import React, {Component} from 'react';
import axios from 'axios';

 

function RecipeList(props) {
    return (
        
    <div className="container">
    <div className="row">
    <div key={props.recipe.title} className="col-md-4" style={{marginBottom: "2rem"}}>
                 <div className="recipes__box">
                     <img
                     className="recipe__box-img"
                     src={props.recipe.img}
                     alt={props.recipe.title}/>
                     <div className="recipe__text">
                         <h5 className="recipes__title">
                             {props.recipe.title}
                         </h5>
                         <p className="recipes__subtitle"> Ingredients: <span>
                             {props.recipe.ingredients}
                             </span></p>
                             <p className="recipes__subtitle"> Instructions: <span>
                             {props.recipe.instructions}
                             </span></p>
                     </div>

                 </div>
                </div>
    </div>
</div>

    )
}

 

export default RecipeList;