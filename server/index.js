const express = require("express");
// const bodyParser = require('body-parser');
const recipeController = require("./controllers/recipeController");
const app = express();
const SERVER_PORT = 3005;


app.use(express.json());

const apiUrl = '/api/recipes'


// my endpoints
app.get(apiUrl, recipeController.getRecipes);
app.post(apiUrl, recipeController.addRecipe)
app.delete(`${apiUrl}/:id`, recipeController.deleteRecipe)
app.put(`${apiUrl}/:id`, recipeController.updateRecipe)


app.listen(SERVER_PORT, () => {
  console.log(`Listening on ${SERVER_PORT}`);
});
