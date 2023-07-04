const mongoose = require('mongoose');

const { DB_URL } = require('./config');

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
.then(() => {
    console.log('Connected to database');
})
.catch((err) => { 
    console.error(err);
});

module.exports = mongoose;