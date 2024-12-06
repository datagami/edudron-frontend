const mongoose = require('mongoose')


const organisationFilterSchema = new mongoose.Schema({
     category:{type:mongoose.Schema.Types.ObjectId,ref:'AddCategory'},
     stream:{type:mongoose.Schema.Types.ObjectId,ref:'AddStream'},
      country:[{
      name:{type:String,},
      status:{type:Boolean},
      countryId:{type:String}
     }],
      state:[{
      name:{type:String},
      countryId:{type:String},
      stateId:{type:String},
      status:{type:Boolean},
     }],
     city:[{
      name:{type:String},
      countryId:{type:String},
      stateId:{type:String},
      cityId:{type:String},
      status:{type:Boolean},
     }],
     course:{type:mongoose.Schema.Types.ObjectId,ref:'AddCategory'},
     exams:{type:mongoose.Schema.Types.ObjectId,ref:'AddExams'},
     facilities:{type:mongoose.Schema.Types.ObjectId,ref:'CollegeBasics'},
     rateOnList:{type:mongoose.Schema.Types.ObjectId,ref:'CollegeBasics'},
     careerList:{type:mongoose.Schema.Types.ObjectId,ref:'CollegeBasics'},
     facultyPost:{type:mongoose.Schema.Types.ObjectId,ref:'AddFaculty'},
     other:{type:mongoose.Schema.Types.ObjectId,ref:'Misc'},
})

const OrganisationFilters = mongoose.model('Filters',organisationFilterSchema)
module.exports = OrganisationFilters