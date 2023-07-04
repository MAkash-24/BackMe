const path = require("path");
const fs = require("fs");
const archiver = require("archiver");
const api_config = require("../config");

const { apiStructure } = api_config;

const BASE_PATH = path.join(__dirname, "../generatedAPIs/Backend");


const createZip = (path, zipName) => {
    // Create a new ZIP archive
    const archive = archiver("zip", { zlib: { level: 9 } });
  
    // Define the source folder to be zipped
    // const sourceFolder = './my-folder';
    const sourceFolder = path;
    
    // Define the output file name and path
    // const outputFilePath = './my-folder.zip';
    const outputFilePath = `./archives/${zipName}`;
  
    // Create a write stream to the output file
    const output = fs.createWriteStream(outputFilePath);
  
    // Pipe the archive data to the output file
    archive.pipe(output);
  
    // Add the contents of the source folder to the archive
    archive.directory(sourceFolder, false);
  
    // Finalize the archive
    archive.finalize();
  
    // Log a message when the archive is finished
    output.on("close", function () {
      console.log(`Successfully created ZIP archive at ${outputFilePath}`);
    });
};

const createFile = (filename, content) => {
    fs.writeFile(filename, content, (err) => {
      if (err) throw err;
      console.log(`File '${filename}' has been saved.`);
    });
  };
  
  const checkFolderCreated = (folderPath) => {
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
  };

const modelCreater = (models) => {
    checkFolderCreated(`${BASE_PATH}/models`);
    models.forEach((model) => {
        const {name, collectionName, fields} = model;
        createFile(`${BASE_PATH}/models/${name}Model.js`, apiStructure.getModelCode(collectionName, fields));
    })
};

const routerCreater = (models, operations) => {


  checkFolderCreated(`${BASE_PATH}/routers`);
    models.forEach((model) => {
        const {name} = model;
        console.log(apiStructure.getRouterCode(name, operations), 'sdsd');
        createFile(`${BASE_PATH}/routers/${name}Router.js`, apiStructure.getRouterCode(name, operations));
    })
};

const connectionCreator = (dbOptions) => {
    createFile(`${BASE_PATH}/connection.js`, apiStructure.getConnectionCode(dbOptions));
};

const packageCreator = () => {
    createFile(`${BASE_PATH}/package.json`, apiStructure.getPackageCode());
};

const indexCreator = (routers) => {
    createFile(`${BASE_PATH}/index.js`, apiStructure.getIndexCode(routers));
};

const APIGenerator = ({models, routers, dbOptions}, cb) => {
    console.log(BASE_PATH);
    checkFolderCreated(BASE_PATH);
    modelCreater(models);
    routerCreater(models, routers);
    connectionCreator(dbOptions);
    packageCreator();
    indexCreator(routers);
    createZip(BASE_PATH, `backendAPI.zip`);
    cb(`backendAPI.zip`);
}

module.exports = APIGenerator;