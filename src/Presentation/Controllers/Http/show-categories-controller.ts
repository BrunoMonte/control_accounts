import Category from '../../../Models/Category'

export default class ShowCategoriesController {
  public async show({ params, response }) {
    const { id }: { id: Number } = params

    const categories: any = await Category.find(id)
    if (!categories) {
      return response.notFound({ message: 'No categories found with this id !' })
    }

    return response.status(200).json({ categories })
  }
}
