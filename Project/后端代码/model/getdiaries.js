'use strict'

class getdiaries {

  constructor (mdb) {
    this.db = mdb
    this.pdb = mdb.db
    this.tableName = 'users'
  }


  async get (data) {
    
    let {id,herid} = data

    let sql = `select diaries.id,content,time,imgpath from users,diaries where diaries.uid=users.id and (uid=${id} or uid=${herid})`

    let u = await this.pdb.query(sql)

    return u.rows
  }

}

module.exports = getdiaries
