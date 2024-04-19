const mongoose=require('mongoose');

const StorySchema = new mongoose.Schema({
storyID:{
    type: Number
},
storyName:{
   type : String ,
   required : true
},
category:{
    type:String,
    required :true
},
Author:{
    type: String,
    required:false
},
Language:{
    type:String,
    required: false
},
Image:{
    type:String,
    required:true,
    match: /^https?:\/\/(?:www\.)?[\w\-.]+\.[a-z]{2,}(?:\/[\w\-.\/?=&%+]*)?$/i
}
})

const story = mongoose.model('story',StorySchema)
module.exports=story