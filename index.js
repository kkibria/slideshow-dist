const sirv = require('sirv');
const polka = require('polka');
const compress = require('compression')();
var livereload = require('livereload');

var server = livereload.createServer({
    extraExts: ['md']
});
server.watch(__dirname + "/public");

const assets = sirv('public', {
    dev: true
});

polka()
    .use(compress, assets)
    .listen(5000, err => {
        if (err) throw err;
        console.log('> Ready on localhost:5000~!');
    });
