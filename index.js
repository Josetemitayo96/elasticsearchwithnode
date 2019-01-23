var express = require ('express');
var app = express();

var client =  require ('./connector/connection.js');

/*client.cluster.health({}, function(err,resp, status){
    console.log ("--client health--", resp);
});*/

//creating index
client.indices.create({
    index:'sport',
}, function(err,resp,status){
    if (err) {
        console.log(err);
    }
    else {
        console.log(resp);
    }
}
);

