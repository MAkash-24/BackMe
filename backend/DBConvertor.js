
const { MongoClient } = require('mongodb');

let dbRows = [];
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'office'
})

connection.connect()

connection.query('SELECT * FROM employee', (err, rows, fields) => {
  if (err) throw err

  // console.log('The solution is: ', rows)
  displayRows(rows);
  dbRows = rows;

})

const displayRows = (rowObj) => {
    for(let row of rowObj){
      for(let key of Object.keys(row)){
        console.log(row[key]);
      }
    }
}


connection.end()

// Connection URL
const url = 'mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/projectdemo2?retryWrites=true&w=majority';
const client = new MongoClient(url);

// Database Name
const dbName = 'projectdemo';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db();
  const collection = db.collection('documents');
  // await collection.insertMany(dbRows);
  await collection.insertOne({text : 'value'});

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());