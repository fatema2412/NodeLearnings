// const chalk=require("chalk");
// console.log(chalk.blue("Hello World"));
// console.log(chalk.red("Hello World"));

// import { readFile } from 'node:fs';
const {readFile,appendFile,writeFile,rename,readdir,unlink}= require("node:fs");
const command =process.argv[2]
const fileAdd=process.argv[process.argv.length-1]
const addedText="\n" + process.argv.slice(3,-1).join(" ")

if(command=="readFile"){
 const fileName=process.argv[3]
readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
}
else if(command=="appendFile"){
appendFile(fileAdd,  addedText, (err) => {
  if (err) throw err;
  console.log("Text appended successfully.");
});
}
else if(command=="createFile"){
  writeFile(fileAdd, addedText, (err) => {
  if (err) throw err;
  console.log("File created successfully.");
});
}
else if(command=="rename"){
    const oldFile=process.argv[3]
    const newFile=process.argv[4]
  rename(oldFile,newFile, (err) => {
  if (err) throw err;
  console.log('Rename complete!');
}); }
else if(command=="list"){
const name=process.argv[3]
readdir(name ,(err,files)=>{
  if (err) throw err;
    console.log(`Files in directory '${name}':`);
    files.forEach(file => {
      console.log("-", file);
    });

})
}
else if(command=="delete"){
unlink(fileAdd, (err) => {
  if (err) throw err;
  console.log("File deleted successfully.");
});
}




