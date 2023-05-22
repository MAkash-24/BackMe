const { getMySQLData } = require('../DBConvertor');

const router = require('express').Router();

router.post('/transfer', (req, res) => {
    const { options, SQLDetails, NoSQLDetails } = req.body;
    console.log(req.body);
    if(options.type === 'SQLtoNoSQL'){
        getMySQLData(SQLDetails, (data) => {
            console.log(data);
        })
    }

})


module.exports = router;