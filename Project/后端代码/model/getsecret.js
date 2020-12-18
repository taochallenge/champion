'use strict'

class getsecret {

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
    
    let secret = c.param.id

    let sql = `select id,myname,birthday,imgpath from ${this.tableName} where secret='${secret}'`

    let u = await this.pdb.query(sql)
    
    return u.rows
  }

}

module.exports = getsecret
