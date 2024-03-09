// TODO: What are we importing?
// This line of code imports the library we want
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// The fs.appendFile is to add the file name and the ${process.argv} is to check the data entered in node.js
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // This is an if statement.
  // If the above argument returns an error, the console will display error response. Else, the console will log Commit logged!
  err ? console.error(err) : console.log('Commit logged!')
);