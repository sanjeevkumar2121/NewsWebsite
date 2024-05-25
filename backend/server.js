const express= require("express")
const cors= require("cors")
const newsserver= express()
newsserver.use(cors())
const port = 8080||3001
newsserver.get("/",(req,res) => {res.send({messege:"This is msg from server and it is running fine"})})







newsserver.listen(port,()=>{console.log(`server listen on port ${port}`)})
