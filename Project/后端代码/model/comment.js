'use strict'

class comment {

  constructor (mdb) {
    this.db = mdb
    this.pdb = mdb.db
    this.tableName = 'comment'
  }

  makeId () {
    return `u_${Date.now().toString(16)}${parseInt(Math.random()*10000) + 11111}`
  }

  model () {
    return this.db.model(this.tableName)
  }

  async list () {

    let sql = 'select comment.id,content,time,users.myname from users,comment where comment.uid=users.id order by comment.id asc'
          
    let ulist = await this.pdb.query(sql)


    return ulist.rows

  }

  async insert (data) {

    let r = await this.model().insert(data)

    return r.rowCount <= 0 ? false : 1; 

  }


  async get (c) {


    let treeid = c.param.id

    let sql = `select treeid,content,imgpath,myname,time from comment,users where uid=users.id and treeid=${treeid}`

    let u = await this.pdb.query(sql)
    
    return u.rows
  }

  async delete (id) {

    let sql = `delete from ${this.tableName} where id=${id}`

    await this.pdb.query(sql)
  }

}

module.exports = comment
