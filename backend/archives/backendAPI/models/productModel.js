const { Schema, model, Types } = require('../connection'); //specify the connection file path

const schema = new Schema({
    field1 : {type : String}
});

module.exports = model('products', schema);