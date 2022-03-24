import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from '../../Models/Category'

export default class CategoriesController {
  public async index({ response }: HttpContextContract) {
    const categories = await Category.all()
    return response.ok(categories)
  }

  public async create({ request, response }: HttpContextContract) {
    const { nome } = request.all()
    const categories = new Category()
    categories.nome = nome

    await categories.save()

    if (!nome) response.status(401).json({ message: ' Informe o campo nome !' })

    return response.status(200).json({ message: 'Categoria criada com sucesso !' })
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
