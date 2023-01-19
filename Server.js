const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const res = require("express/lib/response")
const routes = require("./Routes/Server")
const app = express()
const PORT = process.env.PORT || 4000
const url = "mongodb+srv://pnrede366:Pnrede%40366@cluster0.ytomrhn.mongodb.net/test"



app.use(express.json())
app.use(cors())

app.use(express.static("./Public/"))

mongoose.connect(url, () => {
    console.log("db connected")
})
app.listen(PORT, () => {
    console.log("server started at 4000");
})

app.use('/', routes)