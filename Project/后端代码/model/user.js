'use strict'
const fs = require('fs')
class user {

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

  async insert (data) {

    let {myname,tel,password,birthday,sex,secret,url,filename} = data 
    if(url){
      var base64 = url.replace(/^data:image\/\w+;base64,/, "");//去掉图片base64码前面部分data:image/png;base64
      var dataBuffer = new Buffer.from(base64, 'base64'); //把base64码转成buffer对象，
      var des_file = './public/images/' + filename
      var imgpath = 'http://www.cgwzz.top:1234/static/images/'+filename
      fs.writeFile(des_file, dataBuffer, function (err) {//用fs写入文件
          if (err) {
              console.log(err);
          } else {
              console.log('写入成功！');
          }
      })
      let sql = `insert into users(myname,sex,birthday,secret,tel,password,imgpath) values('${myname}','${sex}','${birthday}','${secret}','${tel}','${password}','${imgpath}')`
      await this.pdb.query(sql);
    }
    else{
      let sql = `insert into users(myname,sex,birthday,secret,tel,password,imgpath) values('${myname}','${sex}','${birthday}','${secret}','${tel}','${password}','${imgpath}')`
      await this.pdb.query(sql);
    }

  }

  async list () {

    let sql = 'select id,herid,myname,hername,sex,age,location,birthday,herbirthday,lovedata,secret,fans,follow,admire,tel,state,password,imgpath from users order by id asc'
          
    let ulist = await this.pdb.query(sql)


    return ulist.rows

  }

  async get (c) {


    let tel = c.param.id

    let sql = `select * from users where tel='${tel}'`

    let u = await this.pdb.query(sql)
    


    return u.rows
  }

  async delete (id) {

    let sql = `delete from ${this.tableName} where id=${id}`

    let deltest = await this.pdb.query(sql)

    console.log(deltest);
  }

}

module.exports = user
