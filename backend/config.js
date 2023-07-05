const api_config = {
  apiStructure: {
    getModelCode: (collectionName, fields) => {
      return `const { Schema, model, Types } = require('../connection'); //specify the connection file path

const schema = new Schema({
    ${fields
      .map((field) => `${field.name} : {type : ${field.type}}`)
      .join(",\n    ")}
});

module.exports = model('${collectionName}', schema);`;
    },

    getRouterCode: (name, collectionName, fields) => {},
  },
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

const updateByIdOperation = () => {
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

const deleteByIdOperation = () => {
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
