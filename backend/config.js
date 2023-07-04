const api_config = {
  apiStructure: {
    getModelCode: (collectionName, fields) => {
      return `const { Schema, model, Types } = require('../connection'); //specify the connection file path

const schema = new Schema({
    ${fields.map((field) => `${field.name} : {type : ${field.type}}`).join(',\n    ')}
});

module.exports = model('${collectionName}', schema);`;
    },

    getRouterCode: (name, operations) => {
      return `const Model = require('../models/${name}Model');

${operations
  .map((operation) => {
    switch (operation) {
      case 'Add':
        return addOperation();
      case 'Get All':
        return getOperation();
      case 'Update':
        return updateOperation();
      case 'Delete':
        return deleteOperation();
      default:
        return '';
    }
  })
  .join('\n\n')}`;

    },

    getConnectionCode: () => {
      return `const mongoose = require('mongoose');

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

module.exports = mongoose;`;
    
    },

    getIndexCode: (routers) => {
      return `const express = require('express');
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
});`;
    },

    getPackageCode: () => {
      return `{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "express-fileupload": "^1.2.1",
    "mongoose": "^5.12.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}`;
    }
  }
};

// MongoDB Operations
const addOperation = () => {
  return `router.post('/add', (req, res) => {
new Model(req.body).save()
.then((result) => {
    res.json(result);    
})
.catch((err) => {
    console.error(err);
    res.status(500).json(err);
});
});`;
};

const getOperation = () => {
  return `router.get('/get', (req,res)=> {
Model.find({})
.then((result) => {
    res.json(result);
}).catch((err) => {
    console.error(err);
    res.status(500).json(err);
});
});`;
};

const updateOperation = () => {
  return `router.put('/update/:id', (req, res) => {
Model.findByIdAndUpdate(req.params.id, req.body, {new : true})
.then((result) => {
    res.json(result);
})
.catch((err) => {
    console.error(err);
    res.status(500).json(err);
});
});`;
};

const deleteOperation = () => {
  return `router.delete('/delete/:id', (req, res) => {
Model.findByIdAndDelete(req.params.id)
.then((result) => {
    res.json(result);
})
.catch((err) => {
    console.error(err);
    res.status(500).json(err);
});
});`;
};
module.exports = api_config;
