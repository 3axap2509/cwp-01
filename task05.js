var path = require('path');
var fs = require('fs');
var folder = process.argv[2];
fs.readdir(
    folder, 
    function(err, items)
    {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            items.forEach(function(item)
            {
               if(path.extname(item) == '')
               {
                fs.readdir(folder + '//' + path.basename(item), function(err, files)
                {
                    if(err)
                    {
                        return console.error(err);
                    }
                    else
                    {
                        files.forEach(function(file)
                        {
                            console.log(path.basename(item) + '/' +  path.basename(file));
                        })
                    }
                })
               }
               console.log(path.basename(item));
            });
        }
    }
    )