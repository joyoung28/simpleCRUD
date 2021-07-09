const express = require("express");
const app = express();
const basic = require("./routes/index");
const imgRouter = require("./routes/img");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const { mongoURI } = require("./config/dev");
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use("/", basic);
app.use("/api", require("./routes/img"));
app.use("/uploads", express.static("uploads")); //static -> 미들웨어로서 로드, 폴더의 데이터들은 웹브라우저의 요청에 따라 서비스 제공
//가상경로를 지정할때 사용
const port = 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}..`);
});
