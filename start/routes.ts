import Route from '@ioc:Adonis/Core/Route'

Route.post('/category', 'CategoriesController.create')
Route.post('/spendings', 'SpendingsController.create')

Route.get('/spendings/list', 'SpendingsController.index')
Route.get('/spendings/:status', 'SpendingsController.show')
Route.patch('/spendings/:nome', 'SpendingsController.update')
Route.delete('/spendings/:id', 'SpendingsController.destroy')

Route.get('/category/list', 'CategoriesController.index')
Route.get('/category/:nome', 'CategoriesController.show')
Route.patch('/category/:nome', 'CategoriesController.update')
Route.delete('/category/:id', 'CategoriesController.destroy')
