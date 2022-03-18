import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Spending from 'App/Models/Spending'

export default class SpendingsController {
  public async index({ response }: HttpContextContract) {
    const spending = await Spending.all()
    return response.ok(spending)
  }

  public async create({ request, response }: HttpContextContract) {
    const { nome, categoria, vencimento, valor, parcelamento, status } = request.only([
      'nome',
      'categoria',
      'vencimento',
      'valor',
      'parcelamento',
      'status',
    ])

    const spending = await Spending.create({
      nome,
      categoria,
      vencimento,
      valor,
      parcelamento,
      status,
    })

    if (!categoria) return response.status(400).json({ message: 'Infome o nome da categoria' })

    return spending
  }

  public async show({ params, response }) {
    const { status }: { status: String } = params

    const spending: any = await Spending.find(status)
    if (!spending) {
      return response.notFound({ message: 'Nenhuma conta encontrada com esse status !' })
    }

    return response.status(200).json({ spending })
  }

  public async destroy({ params, response }: HttpContextContract) {
    const id = params.id

    const spending: any = await Spending.find(id)

    if (!spending) {
      return response.notFound({ message: 'Não existe conta por esse id !' })
    }

    await spending.delete()

    return response.status(200).json({ message: 'Conta delatada com sucesso' })
  }
}
