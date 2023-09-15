const express= require("express");
const route  = require("./routes/route");
const dotenv= require("dotenv")
const app = express();
dotenv.config()
const cors = require("cors")
const port = process.env.port

app.use(cors({origin:"*"}))
app.use(express.json());
app.use("/user/category", route)
app.listen(port , ()=>{
    console.log(`Server is live on the port ${port}`)
})