const { Schema, model, Types } = require('../connection');

const myschema = new Schema({
    title : String,
    user : {type : String, ref : 'users'},
    filename : String,
    createdAt : Date,
});

module.exports = model('generatedAPIs', myschema);