const mongoose = require('mongoose')

const examSchema = new mongoose.Schema({
          rsrc_id:{
                    type: String,
                    required: true
          },
          course_name:{
                    type: String,
					required: true
          },
          exam_date:{
                    type: String,
                    required:true
          },
          exam_time:{
                    type: String
          }
})

const ExamDB = mongoose.model('EXAMDB',examSchema)
module.exports = ExamDB