const mongoose=require("mongoose");

const donationResponseSchema=new mongoose.Schema({
    requestId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"BloodRequest",
        required:true,
    },
    donorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    status:{
        type:String,
        enum:[
            "pending",
            "accepted",
            "rejected",
            "completed"
        ]
    }
},{
    timestamps:true
})

module.exports=mongoose.model("DonationResponse",donationResponseSchema);