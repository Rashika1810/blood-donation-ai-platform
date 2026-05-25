const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    bloodGroup:{
        type:String,
       enum:["A+","A-","B+","B-","AB+","AB-","O+","O-"]
    },
    role:{
        type:String,
        enum:[
            "donor",
            "hospital",
            "admin"
        ],
        default :"donor"
    },
    city:{
        type:String
    },
    location:{
        latitude:{
            type:Number
        },
        longitude:{
            type:Number
        }
    },
    available:{
        type:Boolean,
        default:true
    }
},{
    timestamps:true
})

module.exports=mongoose.model("User",userSchema);