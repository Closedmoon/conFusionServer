var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

var userModel = new Schema({
    admin: {
        type: Boolean,
        default: false
    }
});

userModel.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userModel);
