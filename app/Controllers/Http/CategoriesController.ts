import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CategoriesController {
  public async index({}: HttpContextContract) {}


  public async store({ request }: HttpContextContract) {
    const data = request.only([
      'Nome',
      'Id'
    ])
    console.log(data)
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
