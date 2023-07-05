const { getMySQLData, storeMongoData, getMongoData, storeMySQLData } = require('../DBConvertor');

const router = require('express').Router();

router.post('/transfer', (req, res) => {
    const { options, SQLDetails, NoSQLDetails } = req.body;
    
    console.log(options);
    // res.send('done');
    // return;
    if(options.type === 'SQLtoNoSQL'){
        getMySQLData(SQLDetails, (data) => {
            console.log(data);
            
            storeMongoData(NoSQLDetails, data)
        })
    }else if(options.type === 'NoSQLtoSQL'){
        getMongoData(NoSQLDetails, (data) => {
            console.log(data);
            
            storeMySQLData(SQLDetails, data)
        })
    }

})


// const { getMongoData, storeMySQLData } = require('../DBConvertor');

// const router = require('express').Router();

// router.post('/transfer', (req, res) => {
//     const { options, NoSQLDetails, SQLDetails } = req.body;
    
//     console.log(req.body);
//     if(options.type === 'NoSQLtoSQL'){
//         getMongoData(NoSQLDetails, (data) => {
//             console.log(data);
//             console.log(SQLDetails);
            
//             storeMySQLData(SQLDetails, data);
//         });
//     }
// });



module.exports = router;