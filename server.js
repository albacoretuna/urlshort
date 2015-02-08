/**
 * Created by omid on 8.2.2015.
 * For Reaktor
 * This is a simplistic url shortener, I have a full fledge one working in www.gik.fi for my personal use.
 */

"use strict";

/* I've used Hapi for RESTfulness, developed by Wallmart,
* it's so neat and well documented, making it superior to restify, or express.
*/

var Hapi = require('hapi');

// Links come to this array, for simplicity I just used hte bare array index to retriev them
var linkStore=[];

var server = new Hapi.Server();
server.connection({ port: 3000 });

// Post request to /shorten
server.route({
    method: 'POST',
    path: '/shorten/{link}',
    handler: function (request, reply) {
        var recievedUrl = encodeURIComponent(request.params.link);
        linkStore.push(recievedUrl);
        reply((linkStore.length-1));

    }
    });

//
server.route({
    method: 'GET',
    path: '/{id}',
    handler: function (request, reply) {
        reply( linkStore[encodeURIComponent(request.params.id)] + "\n");
    }

});

server.start(function() {
    console.log('Server running at: ', server.info.uri);
});
