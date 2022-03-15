import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Spending extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public nome: string

  @column()
  public categoria: string
  
  @column()
  public vencimento: string
  
  @column()
  public valor: string
  
  @column()
  public parcelamento: string
  
  @column()
  public status: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
