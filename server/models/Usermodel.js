
const mongoose=require('mongoose')
const usermodel=new mongoose.Schema({
    name:{type:String,required:true},
    roll:{type:String,required:true}
},{
    timestamps:true,
}

)
const Usermodel=mongoose.model('details',usermodel)
module.exports=Usermodel