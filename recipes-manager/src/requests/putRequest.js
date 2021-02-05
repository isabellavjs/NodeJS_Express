const data = require('../data/recipes');

module.exports = {
  async handleIngredient(req, res, next) {
    try {
      const { ingredient, action } = req.query
      const recipeId = parseInt(req.param.id)
      const ingredientsList = data.find(item => item.id === recipeId).ingredientes;
      let result;
    
      if (action === 'remove') {
        result = ingredientsList.filter(ingredientName => ingredientName !== ingredient)
      } else if (action === 'insert') {
        result = ingredientsList.concat(ingredient);
      }

      res.send(result);
    } catch (error) {
      return next('Not found')
    }
  }
}
