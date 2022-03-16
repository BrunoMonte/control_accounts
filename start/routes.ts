import Route from '@ioc:Adonis/Core/Route'

Route.post('/category', 'CategoriesController.create')
Route.post('/spendings', 'SpendingsController.create')

Route.get('/spendings', 'SpendingsController.index')
Route.get('/spendings/:id', 'SpendingsController.show')
Route.delete('/spendings/:id', 'SpendingsController.destroy')

Route.get('/category', 'CategoriesController.index')
Route.get('/category/:id', 'CategoriesController.show')
Route.delete('/category/:id', 'CategoriesController.destroy')
