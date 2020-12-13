const piffero = require('piffero').Piffero;
const fs = require('fs');

const stream = fs.createReadStream('employees.json');
const result = piffero.findPath(stream, "$.employees[0].phoneNumbers[1]");


  streamToString = async (stream) =>{
    const chunks = []
    return new Promise((resolve, reject) => {
      stream.on('data', chunk => chunks.push(chunk))
      stream.on('error', reject)
      stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
    })
  }

printResult = async (result) => {
    const string  = await streamToString(result); 
    console.log(string);
}

printResult(result);
