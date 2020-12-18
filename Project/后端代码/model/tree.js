'use strict'
const fs = require('fs')
class tree {

  constructor (mdb) {
    this.db = mdb
    this.pdb = mdb.db
    this.tableName = 'tree'
  }

  makeId () {
    return `u_${Date.now().toString(16)}${parseInt(Math.random()*10000) + 11111}`
  }

  model () {
    return this.db.model(this.tableName)
  }

  async insert (data) {

    let {filename,url,uid,content} = data
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
      let sql = `insert into ${this.tableName}(content,imgpath,uid) values('${content}','${imgpath}','${uid}')`
      await this.pdb.query(sql);
    }else{
      let sql = `insert into ${this.tableName}(content,uid) values('${content}','${uid}')`
    
      await this.pdb.query(sql);
    }
    

    


  }

  async list () {

    let sql = 'select tree.id,content,countday,countadmire,tree.imgpath treeimg,users.imgpath userimg,collect,users.myname from tree,users where tree.uid=users.id order by tree.id desc' 

    let tlist = await this.pdb.query(sql)

    return tlist.rows

  }
  async delete (id) {

    let sql = `delete from ${this.tableName} where id=${id}`

    let deltree = await this.pdb.query(sql)

    console.log(deltree);
  }
  async get (id) {

    let sql = `select tree.id,content,countday,countadmire,tree.imgpath treeimg,users.imgpath userimg,collect,users.myname from tree,users where tree.uid=users.id and uid=${id} order by tree.id desc`

    let tlist = await this.pdb.query(sql)

    return tlist.rows

  }

}

module.exports = tree
