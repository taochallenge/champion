'use strict'

class getimage {

  constructor (mdb) {
    this.db = mdb
    this.pdb = mdb.db
    this.tableName = 'users'
  }

  makeId () {
    return `u_${Date.now().toString(16)}${parseInt(Math.random()*10000) + 11111}`
  }

  model () {
    return this.db.model(this.tableName)
  }


  async get (c) {
    
    let id = c.param.id

    let sql = `select imgpath from ${this.tableName} where id='${id}'`

    let u = await this.pdb.query(sql)
    
    return u.rows
  }

}

module.exports = getimage
