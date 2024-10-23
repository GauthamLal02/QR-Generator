/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
// import inquirer from "inquirer";
// console.log("Starting the script");
// inquirer
//   .prompt([
//     {message:"Type in your URL: ",
//      name:"URL"},
//   ])
//   .then((answers) => {
//     console.log(answers);
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
 
inquirer
  .prompt([
    {
    message: "Enter your website URL: ",
    name: "URL",
    },
  ])
  
  .then((answers) => {
    var qr_svg = qr.image(answers.URL, {type:'png'});
    qr_svg.pipe(fs.createWriteStream('qr_code.png'));
    var svg_string = qr.imageSync(answers.URL, {type:'png'})
 
    fs.writeFile("URL.txt", answers.URL, (err) => {
        if (err) throw err;
        console.log("The file has been created!");
      }); 
    })
 
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
