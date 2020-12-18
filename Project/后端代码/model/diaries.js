'use strict'

class diaries {

  constructor (mdb) {
    this.db = mdb
    this.pdb = mdb.db
    this.tableName = 'diaries'
  }

  makeId () {
    return `u_${Date.now().toString(16)}${parseInt(Math.random()*10000) + 11111}`
  }

  model () {
    return this.db.model(this.tableName)
  }

  async insert (data) {

    let r = await this.model().insert(data)

    return r.rowCount <= 0 ? false : 1; 

  }

  async list () {

    let sql = `select diaries.id,content,imgpath,time,myname from users,diaries where diaries.uid=users.id order by diaries.id desc`

    let dlist = await this.pdb.query(sql)

    return dlist.rows

  }
  
  async delete (id) {

    let sql = `delete from ${this.tableName} where id=${id}`

    let deldiaries = await this.pdb.query(sql)

    console.log(deldiaries);
  }
}

module.exports = diaries
