var fs = require('fs');

let modelContent = `const { Schema, model } = require("../connection");
const bcrypt = require("bcrypt");
const SALT = 10;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  created_at: Date,
  updated_at: Date,
});

userSchema.pre("save", function (next) {
  let user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) {
    console.log("Password was not modified");
    return next();
  }

  // generate a salt
  bcrypt.genSalt(SALT, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  console.log("comparing...", candidatePassword);
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    console.log(isMatch);
    if (err) {
      console.log(err);
      return cb(err);
    }
    cb(null, isMatch);
  });
};

userSchema.methods.authenticate = function (formData, cb) {
  // console.log('formData', formData);
  bcrypt.compare(formData.password, this.password, function (err, isMatch) {
    if (err && formData.email === this.email) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = model("user", userSchema);
`

const createAPI = (dirname) => {

    try{
        fs.mkdirSync(dirname);
    }catch (error) {
        console.log(error.message);
    }

    let apiData = [
        {
            entity: 'user',
            model: {
                fields : ['name', 'email', 'password', 'role', 'status', 'createdAt', 'updatedAt']
            },
            endpoints: [
                {route: '/login', method: 'post', controller: 'login'},
                {route: '/register', method: 'post', controller: 'register'},
                {route: '/logout', method: 'post', controller: 'logout'},
                {route: '/forgot-password', method: 'post', controller: 'forgotPassword'}
            ]
        },
        {
            entity: 'product',
            model: {
                fields : ['name', 'description', 'price', 'status', 'createdAt', 'updatedAt']
            },
            endpoints: [
                {route: '/create', method: 'post', controller: 'create'},
                {route: '/update', method: 'post', controller: 'update'},
                {route: '/delete', method: 'post', controller: 'delete'},
                {route: '/list', method: 'get', controller: 'list'}
            ]
        },
    ];

    for(let api of apiData){
        fs.writeFile(`${dirname}/${api.entity}Model.js`,modelContent, () => {
            console.log('done');
        })
    }
    
} 


createAPI('myAPI');