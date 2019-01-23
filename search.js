var express = require ('express');
var app = express();

var client =  require ('./connector/connection.js');

client.search({

    index: 'sport',
    type: 'posts',
   
    q: 'volleyball'
}).then(function(resp) {
    console.log(resp);
}, function(err) {
    console.trace(err.message);
});