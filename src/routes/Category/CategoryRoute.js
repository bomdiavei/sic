const CategoryController = require('../../controllers/Category/CategoryController')
module.exports = app => {
  app.post('/categories/post', CategoryController.post)
}