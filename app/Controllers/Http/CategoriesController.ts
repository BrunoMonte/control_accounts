import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'

export default class CategoriesController {
  public async index({ response }: HttpContextContract) {
    const categories = await Category.all()
    return response.ok(categories)
  }

  public async create({ request, response }: HttpContextContract) {
    const { nome } = request.only(['nome'])
    const category = await Category.create({
      nome,
    })

    if (!nome) return response.status(400).json({ message: 'Informe o nome da categoria !' })

    return category
  }

  public async show({ params, response }) {
    const { id }: { id: Number } = params

    const categories: any = await Category.find(id)
    if (!categories) {
      return response.notFound({ message: 'Nenhuma categoria encontrada com esse id !' })
    }

    return response.status(200).json({ categories })
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
