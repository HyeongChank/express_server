// https://www.youtube.com/watch?v=NIKYWadDAbo
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const IpFilter = require('express-ipfilter').IpFilter;


const {
  login,
  accessToken,
  refreshToken,
  loginSuccess,
  logout,
} = require("./controller");

const app = express();
dotenv.config();

// 기본설정을 해줍니다.
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }))
// 허용 IP 목록 정의
const ips = ['127.0.0.1', '::1']; 
// IP 필터 미들웨어 적용
app.use(IpFilter(ips, { mode: 'allow' }));


app.post("/login", login);
app.get("/accesstoken", accessToken);
app.get("/refreshtoken", refreshToken);
app.get("/login/success", loginSuccess);
app.post("/logout", logout);

app.listen(process.env.PORT, () => {
  console.log(`server is on ${process.env.PORT}`);
});