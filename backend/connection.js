const mongoose = require('mongoose');

const url ='mongodb+srv://mauryaakash2000:akash@cluster0.6idnxdc.mongodb.net/BackMe?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
    console.log('server connected');
})
.catch((err) => {
    console.error(err);
});

module.exports = mongoose;