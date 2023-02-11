// Node librarie for working with files
import fs from 'fs';

// Reading the file
const filename = "AT37_01_2019_13.txt"
fs.readFile(filename, 'utf8', function (err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  console.log(data)
});

function main() {

}