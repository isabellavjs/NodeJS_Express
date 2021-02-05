const data = require('../data/recipes');

module.exports = {
  async getRecipes(_req, res) {
    res.send(data);
  },

  async getRecipeId(req, res) {
    const recipeId = parseInt(req.params.id)
    const result = data.find(item => item.id === recipeId);
    res.send(result);
  },

  async getIngredients(req, res) {
    const recipeId = parseInt(req.params.id)
    const ingredients = data.find(item => item.id === recipeId).ingredientes;
    res.send(ingredients);
  }
}
