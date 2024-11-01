var fs = require('fs');
var vinylfs = require( 'vinyl-fs' );
var ftp = require( 'vinyl-ftp' );
var ftpConfig = require('./ftp_config.json');
var last_time = new Date(ftpConfig.last_time); // if null is 1970 01 01

var conn = ftp.create({
    host:     'cn1.xuansiwei.com',
    user:     'tangt1156',
    password: '18476042520',
    port: 21,
    parallel: 3,
    maxConnections: 5,
    log:      function() {
        console.info(arguments);
    }
});


vinylfs.src( [ './**', '!./node_modules/**', '!./src/**', '!./debug/**', '!./bin/**', '!./init_data/**', '!./temp/**', '!./less/**', '!./ftp.js', '!./package.json', '!./package-lock.json', '!./ftp_config.json', '!./.gitignore'], {
buffer: false,
since: last_time
} )
	.pipe( conn.dest( '/' ) );

process.on('exit', function () {
    fs.writeFileSync('./ftp_config.json', JSON.stringify({last_time: new Date()}));
});

process.on('uncaughtException', function (err) {
    console.log('exception');
});