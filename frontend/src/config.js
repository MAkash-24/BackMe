
const app_config = {
    apiUrl: "http://localhost:5000",
    title: "Back Me",
    themeColor: "#33d2c2",
    status: {
      login: {
        success: 200,
        fail: 401,
      },
    },
    dbOptions: {
      sql: [
        { name : 'MySQL', connDetails : {
          host: 'localhost',
          user: 'root',
          
        } },
        { name : 'PostgreSQL' },
        { name : 'SQLite' },
      ],
      nosql: [
        { name : 'MongoDB' },
        { name : 'Cassandra' },
        { name : 'CouchDB' },
      ]
    }
  };
  
  export default app_config;
  