'use strict'

class clearher {

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


  async update (data) {
    
    let {id,herid} = data

    let sql = `update users set herid=NULL,hername=NULL,herbirthday=NULL,herimgpath=NULL,lovedata=NULL where id=${id}`
    let sql1 = `update users set herid=NULL,hername=NULL,herbirthday=NULL,herimgpath=NULL,lovedata=NULL where id=${herid}`

    await this.pdb.query(sql)
    await this.pdb.query(sql1)
    
  }

}

module.exports = clearher
