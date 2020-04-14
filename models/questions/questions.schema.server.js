const mongoose = require('mongoose')

const questionsSchema = mongoose.Schema(
    {
        title: {type: String, default: 'New Questions'},
        question : {type: String, required: true},
        correct : {type: String, required: true},
        type: {type: String, enum: ['TRUE_FALSE', 'MULTIPLE_CHOICE']},
        choices : [String],
        answer : String
    }, {collection : 'questions'}
)

module.exports = questionsSchema
