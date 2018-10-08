var fs = require('fs');

var main = require('../xml2json');

var args = process.argv.slice(2);

fs.readFile(args[0], 'utf8', function(err, data) {
    
    main(data, function(err, json) {

        console.dir(json);

        // beautify JSON
        json = JSON.stringify(JSON.parse(json), null, '\t');
        fs.writeFile(args[1], json, function(err) {
            if (err) {
                console.error('Error writing to ouput file\n' + err);
                return -1;
            }
        });
    });
});

