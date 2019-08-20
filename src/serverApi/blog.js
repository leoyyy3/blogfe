var mongoose = require("mongoose");
var baseUrl = require("../util/config");

mongoose.connect(baseUrl.databaseUrl,{ useNewUrlParser: true });

mongoose.connection.on('connected', function () {    
    console.log('Mongoose connection open to ');  
});

mongoose.connection.on('error',function (err) {    
    console.error('Mongoose connection error: ' + err);  
});

mongoose.connection.on('disconnected', function () {    
    console.error('Mongoose connection disconnected');  
}); 

var Schema = mongoose.Schema

const blogSchema = new Schema({
    title    : {
        type:String
    },
    url : {
        type:String
    },
    description  : {
        type:String
    },
},{collection:'articallist'})

var blog = mongoose.model('articallist', blogSchema);
// console.log('blog',blogSchema)
module.exports = blog