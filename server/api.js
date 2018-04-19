const fs = require('fs')
const jwt = require('jsonwebtoken')
var multer = require('multer')
var storage = multer.diskStorage({
//设置上传后文件路径，uploads文件夹会自动创建。
destination: function (req, file, cb) {
    cb(null, 'upload/')
},
//给上传文件重命名，获取添加后缀名
filename: function (req, file, cb) {
    let filename = file.originalname.split('.')
        cb(null, filename[0] + '-' + Date.now() + '.' + filename[1])
    }   
});
var upload = multer({ storage: storage })

module.exports = function (app) {

    //登录接口
    app.post('/user/login', function (req, res) {
        let user = fs.readFileSync(__dirname + '/user.json', { encoding: "utf-8" })
        user = JSON.parse(user)
        let login = req.body
        let resInfo = {
            "success": 1,
            "info": "用户名或密码错误！",
            "token": ''
        }
        user.forEach(user => {
            if (user.username == login.username && user.password == login.password) {
                resInfo.success = 0,
                resInfo.info = "登录成功！",
                resInfo.user = {
                    name: user.username,
                    time: new Date().toLocaleDateString()
                }
            }
        })
        if (resInfo.success == 0) {
            resInfo.token = jwt.sign(login, '1511', {
                expiresIn: 60 * 60
            })
        }
        res.end(JSON.stringify(resInfo))
    })

    //upload 上传接口
    app.post('/Creative/upload',upload.single('file'),function(req,res){
        let homeData = JSON.parse(fs.readFileSync(__dirname+'/data/data.json'))
        let data = {
            "size":req.file.size,
            "img":req.file.path,
            "key":"2A36B67C6",
            "material": "2016-05-02",
            "materialId": "171102-4",
            "materialType": "图文（单）",
            "fall": "https://baidu.com",
            "monitor": "https://www.baidu.com",
            "element": "123456",
            "plan": "DD-广告测试团队",
            "exposure": 2000,
            "click": 1000,
            "status": "投放中"
        }
        homeData.push(data)
        fs.writeFileSync(__dirname+'/data/data.json',JSON.stringify(homeData))
        res.end(JSON.stringify({
            "status":"0",
            "data": data,
          })
        )
    })
    
    app.post('/Creative/origin',function(req,res){
        let OriginData = JSON.parse(fs.readFileSync(__dirname+'/data/data.json'))
        res.end(JSON.stringify({
            "status": 0,
            "data": OriginData
        })) 
    })

}