const mongoose = require('mongoose');

// const url ='mongodb+srv://mauryaakash2000:akash@cluster0.6idnxdc.mongodb.net/BackMe?retryWrites=true&w=majority'
const url ='mongodb+srv://rohit:rohit123@cluster0.i42yjw2.mongodb.net/'

mongoose.connect(url)
.then((result) => {
    console.log('server connected');
})
.catch((err) => {
    console.error(err);
});

module.exports = mongoose;