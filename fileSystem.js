let fs=require("fs");
let read=fs.readFileSync("f1.js");
// console.log(read+"");
//create new file
// fs.openSync("abc.txt","w");
// fs.writeFileSync("abc.txt","this is sona")
// update a file
// fs.appendFileSync("abc.txt","today i m so happy");
//create new folder
// fs.mkdirSync("newfolder");
//create new file
// fs.writeFileSync("newfolder/newfile.txt","hioiiiiiiiiiiiiiiiiiiiiiii");


//read all file
let content= fs.readdirSync("newfolder");
// console.log(content);
// for(i=0;i<content.length;i++){
//     //delete all the file in the directory
//     console.log("removwe file"+content[i]);
//     fs.unlinkSync("newfolder/"+content[i]);
// }

//remove the folder
fs.rmdirSync("newfolder");

