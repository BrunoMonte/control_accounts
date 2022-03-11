import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CategoryController {
    public async create({ request }: HttpContextContract){
        const data = request.only(['name','id'])
        console.log(data)
    }
}

