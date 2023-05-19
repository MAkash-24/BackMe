const mongoose = require('mongoose');

const url ='mongodb+srv://Akash2403:Akash2403@cluster0.jehucbn.mongodb.net/BackMe?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
    console.log('server connected');
})
.catch((err) => {
    console.error(err);
});

module.exports = mongoose;