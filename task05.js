var path = require('path');
var fs = require('fs');
var folder = process.argv[2];
fs.readdir(
    folder, 
    function(err, files)
    {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            files.forEach(function(file)
            {
                console.log(path.basename(file));
            });
        }
    }
    )