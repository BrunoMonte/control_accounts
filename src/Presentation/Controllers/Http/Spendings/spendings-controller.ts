import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Spending from '../../../../Models/Spending'

export default class SpendingsController {
  public async index({ response }: HttpContextContract) {
    const spending = await Spending.all()
    return response.ok(spending)
  }

  public async create({ request, response }: HttpContextContract) {
    const { nome, categoria, vencimento, valor, parcelamento, status } = request.all()
    const spending = new Spending()

    spending.nome = nome
    spending.categoria = categoria
    spending.vencimento = vencimento
    spending.valor = valor
    spending.parcelamento = parcelamento
    spending.status = status

    await spending.save()

    if (!categoria) response.status(401).json({ message: 'Informe o campo de categoria ! ' })

    return response.status(200).json({ message: 'Conta criada com sucesso !' })
  }

  public async show({ params, response }) {
    const { id } = params
    const spending = await Spending.find(id)

    return response.json(spending)
  }

  public async update({ params, request, response }: HttpContextContract) {
    const { id } = params
    const { nome, categoria } = request.all()
    const spending = await Spending.findOrFail(id)
    spending.nome = nome || spending.nome
    spending.categoria = categoria || spending.categoria

    await spending.save()
    return response.json(spending)
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
