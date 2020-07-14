const { Transform } = require('stream');

function camel(chunk)
{
    let data = chunk.toString();
  
    return data.split(" ").map((word, i) => {
            if(i>0){
                    return word.charAt(0).toUpperCase() + word.slice(1);
                    }
                return word.toLowerCase();
            }).join("");
    
}

const transformStream = new Transform({
    transform(chunk, encoding, callback)
    {
        this.push(camel(chunk));
        callback();
    }
});

process.stdin.pipe(transformStream).pipe(process.stdout);
