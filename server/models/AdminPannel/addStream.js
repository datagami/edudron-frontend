const mongoose =require('mongoose');


const addStreamSchema=new mongoose.Schema({
      name:{type:String},
      status:{type:String,default:'0'},
      categoryId:{type:mongoose.Schema.Types.ObjectId,required:true},
      stream_pic:{type:String,default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlhyR2gEXTyiDFO4Ek2KTBDqRlD2tPEk1xU5JAMb5Jig&usqp=CAU&ec=48600112"}
},{
      timestamps:true
  });


module.exports=mongoose.model('AddStream',addStreamSchema);