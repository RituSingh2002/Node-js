// const auth=require("./auth");
// //NPM MODULES
// // register("Ritu Singh");
// auth.register("sona");
// auth.login("sona",123);

//core module
// path module
// const path=require('path');
// console.log(__filename);
// // if you want dirname
// console.log('Folder name:',path.dirname(__filename));
// //filr name
// console.log('File name:',path.basename(__filename));
// //exension of file
// console.log('Ext name:',path.extname(__filename));
// //parse
// console.log('parse name:',path.parse(__filename));
// //join: it will join all the argument and make the one path
// console.log('join name:',path.join(__dirname,'order','app.js'));

/// File module is used for create a new folder or read and wtrite a file
const path=require('path');
const fs=require('fs');
// const { dirname } = require('path');
// // create a new folder
// fs.mkdir(path.join(__dirname,"./fileFolder"),(error)=>{
//     if(error){
        
//         console.log("something is went wrong");
//     }
//     console.log("folder isa created");
// })
// create a file
// fs.writeFile(path.join(__dirname,"./fileFolder","data.txt"),"hello Ritu \n",(error)=>{
//     if(error){
//         throw error;
//     }
//     fs.appendFile(path.join(__dirname,"./fileFolder","data.txt"),"what will you learn today",(error)=>{
//         if(error){
//             throw error;
//         }
//         console.log("file is append");
//     })
//     console.log("file is created");
// })
/// if you want to read a file

// fs.readFile(path.join(__dirname,"./fileFolder","data.txt"),'utf-8',(error,data)=>{
//     if(error){
//         throw error;
//     }
//     // console.log(data+"");
//     console.log(data);
// })

// operating system module
const os=require('os');
// Type of operating system
// console.log('type of OS',os.type());
// // type of CPU
// console.log('CPU Arch',os.arch());
// //if you want to more information about your CPU
// console.log('CPU',os.cpus());
// console.log('Free Memory',os.freemem());
// console.log('Total memory',os.totalmem());
// console.log('Uptime',os.uptime());

//Events module
const Emitter=require('events');
//it will return class firstly we have to make object of that class
//HTTP Module
const http=require('http');
const app=http.createServer((req,res)=>{
    // console.log(req.url);
    res.writeHead(200,{
        'Content-Type':'text/JSON'
    })

//     if(req.url=='/'){
//     fs.readFile(path.join(__dirname,"public","index.html"),(err,content)=>{
//         if(err){
//             throw err
//         }
//        res.end(content);

//     })
// }
// else if(req.url=='/about'){
//     fs.readFile(path.join(__dirname,"public","about.html"),(err,content)=>{
//         if(err){
//             throw err
//         }
//        res.end(content);

//     })
// }
// res.end('hello from server httppppp mlllllllllodule');
const filePath=path.join(__dirname,"public",req.url=='/'?"index.html":req.url);
fs.readFile(filePath,(err,content)=>{
    if(err){
        fs.readFile(path.join(__dirname,"public","error.html"),(err,content)=>{
            if(err){
                    res.writeHead(500);
                    res.end("ERROR !!!!!");
                }
                else{
                     
                  res.writeHead(404,{
                                'Content-Type':'text/html'
                            });
                            
                res.end(content);
                }
        })
    }
    else{
        res.writeHead(200,{
            'Content-Type':'text/html'

        })
          res.end(content);

    }
    // if(err){
    //     res.writeHead(500);
    //     res.end(err);
    // }
   
})
})
const port=process.env.PORT|| 3000;
app.listen(port,()=>{
    console.log(`listening on a port ${port}`)
});


