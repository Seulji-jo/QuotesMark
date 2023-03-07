const express = require('express');
const app = express();
const cors = require('cors');

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());

const englishQuotes = require('./englishQuotes');
const koreanQuotes = require('./koreanQuotes');

app.get('/en', englishQuotes);
app.get('/kr', koreanQuotes);

app.listen(8000, () => {
  //포트번호 3000으로 서버 구동
  console.log("서버 시작 주소: http:localhost:8000");
});