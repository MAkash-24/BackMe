const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.use('/uploads', express.static('uploads'));

app.use('/api', require('./apiRouter'));

app.listen(5000, () => {
    console.log('Server started at port 5000');
});