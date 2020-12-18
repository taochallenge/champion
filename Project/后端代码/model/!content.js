'use strict'

/**
 * 这仅仅是一个演示用例，此处并没有做真实的数据库处理。
 * 
 * 这里的数据库模型类默认都会加载到app.service.model中。
 * 
 */

let h5Intro = `
  <p>尽管名字叫H5，但其实就是Web领域，是涉及到完整的前后端开发。包括但不限于使用以下技术：</p>
  <div style="margin-left:0.5rem;">
    <ul>
      <li>HTML、CSS、JavaScript</li>
      <li>Node.js</li>
      <li>数据库：PostgreSQL、MySQL</li>
      <li>Linux：Ubuntu、CentOS</li>
      <li>Shell脚本</li>
    </ul>
  </div>

  <p>
  开发者需要了解的技术是非常广泛的，对HTTP协议的理解是十分必要的。无论前后端，都需要了解通信的过程和协议的基本处理方式。
  后端在路由和通信接口的设计上，采用比较多的是遵循RESTful原则，好的接口设计能大大提高开发效率和整体运行效率，并很大程度上降低维护成本。
  然而RESTful不是万能良药，有时也要针对具体场景作出最适合的方案。
  </p>

  <p>
    仅仅有Web服务框架还不够，操作数据库还需要数据库服务软件以及对应的客户端扩展，而在Node.js环境上，需要有Node.js的操作数据库扩展。对于MySQL来说，则有mysql和mysql2扩展用来操作数据库，而PostgresQL则需要使用pg，这些都可以使用npm进行安装。
  </p>
  <p>
    数据库的安装则根据平台进行安装即可，也可以自己编译，PostgreSQL编译是非常方便的，而MySQL则要复杂的多且耗时漫长。
  </p>
  
`

class content {

  constructor (mdb) {
    this.mdb = mdb || null
  }

  async get (id) {
    return h5Intro
  }

  async insert(data) {

  }

  async delete (id) {

  }

}

module.exports = content
