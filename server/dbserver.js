const mongoose=require('mongoose')

const URL='mongodb://127.0.0.1:27017/cbitlib'
mongoose.connect(URL)
const con=mongoose.connection
con.on('connected',()=>{
    console.log("connected")
})
con.on('error',()=>{
    console.log("error")
})