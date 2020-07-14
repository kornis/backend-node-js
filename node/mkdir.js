const fs = require("fs");

fs.mkdir('platzi/js/pruebas', {recursive:true}, (err) =>
{
    if(err){
        console.log(err);
    }
});