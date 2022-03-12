import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Spendings extends BaseSchema {
  protected tableName = 'spendings'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('Nome')
      table.string('Categoria').unique().notNullable()
      table.string('Vencimento')
      table.string('Valor')
      table.string('Parcelamento')
      table.string('Status')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
