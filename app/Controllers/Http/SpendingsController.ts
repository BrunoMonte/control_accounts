import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Spending from 'App/Models/Spending'


export default class SpendingsController {
  
  public async index({ response }: HttpContextContract) {
    const spending = await Spending.all()

    return response.ok(spending)
  }

  public async create({ request,response }: HttpContextContract) {
    const { nome, categoria, vencimento, valor, parcelamento, status } = request.only([
      'nome',
      'categoria',
      'vencimento',
      'valor',
      'parcelamento',
      'status'
    ])
    
    const spending = await Spending.create({
      nome,
      categoria,
      vencimento,
      valor,
      parcelamento,
      status,
    })
    
    if(!categoria)
    return response.status(400).json({message: 'Infome o nome da categoria' })
    
    return spending
  }

  public async show({ params, response }: HttpContextContract) {

    const {id} = { id:Number } = params
    const spending: any = await Spending.find(id)

    if(!spending){
      return response.notFound({ message: 'Conta não encontrada por esse ID !' })
    }
    
    return response.ok(spending)
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({ params, response }: HttpContextContract) {

    const {id} = { id:Number } = params

    const spending: any = await Spending.find(id)

    if(!spending){
      return response.notFound({ message: "Não existe conta por esse id !" })
    }

    await spending.delete()

    return response.ok({message: 'Conta deletada com sucesso !'})
  }
}
