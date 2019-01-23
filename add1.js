var express = require ('express');
var app = express();

var client =  require ('./connector/connection.js');

client.index({
    index:'sport',
    type:'posts',
    id:'1',
    body:{ "Numberofplayers": "11"}
}).then (function(resp){
    console.log(resp);
}, function(err){
    console.log(err);
}); 