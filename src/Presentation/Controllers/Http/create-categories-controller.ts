import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from '../../../Models/Category'

export default class CreateCategoriesController {
  public async index({ response }: HttpContextContract) {
    const categories = await Category.all()
    return response.ok(categories)
  }

  public async create({ request, response }: HttpContextContract) {
    const { nome } = request.all()
    const categories = new Category()
    categories.nome = nome

    await categories.save()

    if (!nome) response.status(401).json({ message: ' Enter the name field!' })

    return response.status(200).json({ message: 'Category created successfully!' })
  }

  public async destroy({ params, response }: HttpContextContract) {
    const id = params.id

    const categories: any = await Category.find(id)

    if (!categories) {
      return response.notFound({ message: 'Não existe conta por esse id !' })
    }

    await categories.delete()

    return response.status(200).json({ message: 'Conta delatada com sucesso' })
  }
}
