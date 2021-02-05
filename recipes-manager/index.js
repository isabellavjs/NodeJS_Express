const express = require('express');
const app = express();
const port = 3000;
const { getRecipes, getRecipeId, getIngredients } = require('./src/requests/getRequests');
const { handleIngredient } = require('./src/requests/putRequest');

app.use(express.json());

// app.get('/', getRecipes);
app.get('/recipe', getRecipes);
app.get('/recipe/:id', getRecipeId);
app.get('/recipe/:id/ingredients', getIngredients);

app.put('/recipe/:id/ingredients', handleIngredient);

/* app.use(function(err, req, res, next) {
  const recipeId = parseInt(req.params.id)
  if (recipeId !== 12345 && recipeId !== 12346) {
    return res.status(404).send(err.message)
  }
  next();
}); */

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
