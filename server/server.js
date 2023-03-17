const express = require("express")
const app = express()

require('dotenv').config();

require("./configs/mongoose.config")

app.use( express.json() );
app.use( express.urlencoded({ extended: true }));

app.get("/api/testing", (req, res)=>{
    res.json({message: "We are connected"})
})

app.listen(8000, ()=>console.log(`Listening on port: 8000`))