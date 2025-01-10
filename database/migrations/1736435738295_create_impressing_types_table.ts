import { BaseSchema } from "@adonisjs/lucid/schema";

export default class extends BaseSchema {
  protected tableName = "impressing_types";

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("type");
    });
  }

  async down() {
    this.schema.dropTable(this.tableName);
  }
}
