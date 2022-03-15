import Route from '@ioc:Adonis/Core/Route'

Route.post('/category', 'CategoriesController.create') 
Route.post('/spendings', 'SpendingsController.create')

Route.get('/spendings', 'SpendingsController.index')
Route.put('/spendings/:id', 'SpendingsController.update')
Route.delete('/spendings/:id', 'SpendingsController.destroy')

Route.get('/category', 'SpendingsController.index')
Route.put('/category/:id', 'SpendingsController.update')
Route.delete('/category/:id', 'SpendingsController.destroy')


  
