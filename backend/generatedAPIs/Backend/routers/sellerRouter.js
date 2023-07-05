const Model = require('../models/sellerModel');

router.get('/get', (req,res)=> {
Model.find({})
.then((result) => {
    res.json(result);
}).catch((err) => {
    console.error(err);
    res.status(500).json(err);
});
});

router.delete('/delete/:id', (req, res) => {
Model.findByIdAndDelete(req.params.id)
.then((result) => {
    res.json(result);
})
.catch((err) => {
    console.error(err);
    res.status(500).json(err);
});
});

router.post('/add', (req, res) => {
new Model(req.body).save()
.then((result) => {
    res.json(result);
})
.catch((err) => {
    console.error(err);
    res.status(500).json(err);
});
});



