const userDatabase = require("../Database");
const jwt = require("jsonwebtoken");

const login = (req, res, next) =>{
    const {email, password} = req.body;

    const userInfo = userDatabase.filter(item =>{
        return item.email ===email;
    })
    console.log(userInfo);
    next();
}
const aaccesstoken = (req, res) =>{

}
const refreshtoken = (req, res) =>{

}
const loginSuccess = (req, res) =>{
    
}
const logout = (req, res) =>{
    
}

module.exports = {
    login,
    aaccesstoken,
    refreshtoken,
    loginSuccess,
    logout
}