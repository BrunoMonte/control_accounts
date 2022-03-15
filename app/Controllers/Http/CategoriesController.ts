import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'



export default class CategoriesController {
  public async index({response}: HttpContextContract) {
    const categories = await Category.all()
    return response.ok(categories)
  }


  public async create({ request, response }: HttpContextContract) {
   const { nome } = request.only([
     'nome'
   ])
   const category = await Category.create({
      nome,
   })

   if(!nome)
   return response.status(400).json({ message: 'Informe o nome da categoria !' })

   return category

  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({params, response}: HttpContextContract) {
    const {id} = { id:Number } = params

    const spending: any = await Category.find(id)

    if(!spending){
      return response.notFound({ message: "Não existe categoria com esse id !" })
    }

    await spending.delete()

    return response.ok({message: 'Categoria deletada com sucesso !'})
  }
}
