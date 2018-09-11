var path = require('path');
var fs = require('fs');
var folder = process.argv[2];
var newScript = folder + '//summary.js';



fs.open(newScript, "w+", 0644, function(err, file_handler)
{

})
fs.writeFile(newScript, "var path = require('path');var fs = require('fs');var f = process.argv[1];for(var i = 0; i < 10; i++){f = f.substring(0, f.length-1);}fs.readdir(f,function(err, items){if(err){return console.error(err);}else{items.forEach(function(item){if(path.extname(item) == ''){fs.readdir(f + '//' + path.basename(item), function(err, files){if(err){return console.error(err);}else{files.forEach(function(file){console.log(path.basename(item) + '/' +  path.basename(file));})}})}console.log(path.basename(item));});}})", function(eror){if(eror){return console.err(err)}});

// fs.readdir(
//     folder, 
//     function(err, items)
//     {
//         if(err)
//         {
//             return console.error(err);
//         }
//         else
//         {
//             items.forEach(function(item)
//             {
//                if(path.extname(item) == '')
//                {
//                 fs.readdir(folder + '//' + path.basename(item), function(err, files)
//                 {
//                     if(err)
//                     {
//                         return console.error(err);
//                     }
//                     else
//                     {
//                         files.forEach(function(file)
//                         {
//                             console.log(path.basename(item) + '/' +  path.basename(file));
//                         })
//                     }
//                 })
//                }
//                console.log(path.basename(item));
//             });
//         }
//     }
//     )