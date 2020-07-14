/*const str = "pepe argento lugano";

console.log(str.split(" ").map((word,i) =>
{
    if(i>0){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word.toLowerCase();
}).join(""));*/

const fs = require('fs');
const { Writable } = require('stream');

    let gitignore = fs.createWriteStream('./.gitignore');
    fs.createReadStream('./pepe.txt').pipe(gitignore);
    fs.copyFile('./.gitignore','../',()=>{
        console.log("archivo copiado con exito.");
    });


