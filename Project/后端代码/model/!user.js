'use strict'

class user {

  constructor (mdb) {
    this.db = mdb

    this.tableName = 'users'
  }

  makeId () {
    return `u_${Date.now().toString(16)}${parseInt(Math.random()*10000) + 11111}`
  }

  async insert (data) {
    
    let id = this.makeId()

    let sql = `INSERT INTO ${this.tableName}(id, usernname, passwd) VALUES($1, $2, $3)`

    let ret = await this.db.query(sql, [
      id, data.username, data.passwd
    ])

    if (ret.rowCount <= 0) {
      return false
    }

    return id
  }

  async list () {
    let sql = `SELECT * from ${this.tableName} LIMIT 20`

    let ulist = await this.db.query(sql)

    return ulist.rows

  }

}

module.exports = user
