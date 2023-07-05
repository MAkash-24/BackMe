const { Router } = require('express');
const router = Router();
const Model = require('../models/apiModel');
const APIGenerator = require('./APIUtils');

router.post('/generate', (req, res) => { 

    // console.log(req.body);
    const { models, routers, dbOptions } = req.body;
    // console.log(routers);
    APIGenerator({models, routers, dbOptions}, (file) => {
        // console.log(file);
        res.json({
            url : `http://localhost:5000/${file}`,
        });
    });

});

router.post('/add', (req, res) => { 
    
    // get data from client
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.json(result);    
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});

router.post('/authenticate', (req, res) => {

    Model.findOne(req.body)
    .then((result) => {
        if(result) res.json(result);
        else res.status(401).json({message: 'Invalid credentials'});
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });

})


router.get('/getall', (req,res)=> {

    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });

})

module.exports = router;