var path = require('path');
var fs = require('fs');
var folder = process.argv[2];
var newScript = folder + '//summary.js';
var json_file = folder + '//config.json'

var mf = process.argv[2].split('\\');
var main_foler = mf[mf.length-1];

fs.open(json_file, "w+", 0644, function(err, file_handler)
{
    if(err)
    {
        console.error(err);
    }
})
fs.writeFile(json_file, `{
    "copyright": "!@#$%^&*()"
}`, function(eror){
    if(eror)
    {
        return console.err(eror)
    }
})

fs.open(newScript, "w+", 0644, function(err, file_handler){})
fs.writeFile(newScript, `
var path = require('path');
var fs = require('fs');
var f = process.argv[1];

var obj;
fs.readFile('config.json', 'utf8', function(err, data)
{
    if (err) throw err;
    obj = JSON.parse(data).copyright;
    fs.mkdir("` + main_foler + `", function(eror)
    {
        if(eror)
        {
            return console.error(eror)
        }
    })
    for(var i = 0; i < 10; i++)
    {
        f = f.substring(0, f.length-1);
    }
    fs.readdir(f,function(err, items)
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
                    fs.readdir(f + '//' + path.basename(item), function(err, files)
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
                else if(path.extname(item) == ".txt")
                {
                    fs.copyFile(item, "` + main_foler + `" + '/' + path.basename(item), function(eror)
                    {
                        if(eror)
                        {
                            return console.error(eror)
                        }
                        fs.readdir(f + '//' + "` + main_foler + `", function(err, files)
                        {
                            if(err)
                            {
                                console.error(err);
                            }
                            files.forEach(function(file)
                            {
                                fs.readFile(file, function(err, data)
                                {
                                    if(err)
                                    {
                                        console.error(err);
                                    }
                                    let buffer = obj + data + obj;
                                    let fff = "учёба/" + file;
                                    fs.writeFile("` + main_foler + `/" + file, buffer, 'win1251', function(err)
                                    {
                                        if(err)
                                        {
                                            console.error(err);
                                        }
                                        fs.watch(fff, (eventType, filename)=>
                                        {
                                            if (eventType=='rename') 
                                            {
                                                console.log(filename + ' renamed');
                                            }
                                            if(eventType=='change')
                                            {
                                                console.log(filename + ' changed');
                                            }
                                        })
                                    })
                                })
                            })
                        })
                    });
                }
                console.log(path.basename(item));
            });
        }
    })
});
`, function(eror){
    if(eror)
    {
        return console.err(eror)
    }
});