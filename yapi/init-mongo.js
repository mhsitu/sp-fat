db.creatUser(
  {
    user: 'yapi',
    pwd: 'yapi123456',
    roles:[
    {role:"dbAdmin", db: "yapi"},
    {role:"readWrite", db:"yapi"}
    ]
  }
)
