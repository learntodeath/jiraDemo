module.exports = (req , res) => {
    if(req.method=='POST' && req.path == '/login'){
        console.log(req.body)
        if(req.body.username === 'admin' && req.body.password === 'admin') {
            return res.status(200).json({
                user: {
                    token: '123'
                }
            })
        }else {
            return res.status(400).json({
                message: '用户名或密码错误'
            })
        }
    }
}