 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

 export default class SpendingsController {
    public async create({ request }: HttpContextContract){
        const data = request.only(['name','id'])
        console.log(data)
    }
}

