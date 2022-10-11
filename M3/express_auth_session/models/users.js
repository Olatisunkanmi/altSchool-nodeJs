const moogoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserModel = new moogoose.Schema({
    username: String,
    password: String
})

// Automatically handles hashing and salting of passwords
// and adds the following properties to the user object:
//   - password
//   - salt
//   - hash
UserModel.plugin(passportLocalMongoose)

module.exports = moogoose.model('users', UserModel)