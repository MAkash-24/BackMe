const { Schema, model, Types } = require('../connection'); //specify the connection file path

const schema = new Schema({
    name : {type : String}
});

module.exports = model('users', schema);