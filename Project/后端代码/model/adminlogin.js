'use strict'

class adminlogin {

  constructor (mdb) {
    this.db = mdb
    this.pdb = mdb.db
    this.tableName = 'admin'
  }

  makeId () {
    return `u_${Date.now().toString(16)}${parseInt(Math.random()*10000) + 11111}`
  }

  model () {
    return this.db.model(this.tableName)
  }


  async get (c) {
    
    let tel = c.param.id

    let sql = `select * from ${this.tableName} where tel='${tel}'`

    let u = await this.pdb.query(sql)
    
    return u.rows
  }

}

module.exports = adminlogin
