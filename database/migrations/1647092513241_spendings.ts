import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Spendings extends BaseSchema {
  protected tableName = 'spendings'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome')
      table.string('categoria').unique().notNullable()
      table.date('vencimento')
      table.string('valor')
      table.string('parcelamento')
      table.string('status')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
