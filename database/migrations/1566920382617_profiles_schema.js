'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfilesSchema extends Schema {
  up () {
    this.create('profiles', (table) => {
      table.increments()
      table.string('first_name',80)
      table.string('last_name',80)
      table.string('email',255)
      table.string('address')
      table.string('phone',16)
      table.string('status')
      table.string('birthdate')
      table.string('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('profiles')
  }
}

module.exports = ProfilesSchema
