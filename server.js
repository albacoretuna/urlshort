/**
 * Created by omid on 8.2.2015.
 */
var Hapi = require('hapi');
var save = require('save');
var rawlink = save('link');

rawlink.on('create', function() {
    console.log('New rawlink created');
});
rawlink.create({url: 'www.reaktor.fi'}, function(err, rawlink){
    console.log(rawlink);
});
console.log(save.rawlink);

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply){
        reply('Hi , world!');
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hi hi hi hi, ' + encodeURIComponent(request.params.name) + ' !');
    },
    config: {
        description: 'Say hello!',
        notes: 'The user parameter defaults to \'stranger\' if unspecified',
        tags: ['api', 'shortener']
    }
});

server.start(function() {
    console.log('Server running at: ', server.info.uri);
});
