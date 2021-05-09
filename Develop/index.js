// TODO: Include packages needed for this application
const inquirer=require("inquirer");
const fs = require("fs");
const generateMarkdown=require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
inquirer.prompt(
    [
    {
        type:"input",
        name:"github", 
        message:"What is your GitHub profile?",
    },
    {
        type:"input", 
        name:"email",
        message:"What is your email?"
    },
    {
        type:"input", 
        name:"projectTitle",
        message:"What is your project's name?"
        
    },
    {
        type:"input", 
        name:"discription",
        message:"Please write a brief discription of your project?",
    },
    {
        type:"list",
        name:"license",
        message:"What kind of Licence should your project have?",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "install",
        message: "Are there any installations required?"
    },

    {
        type: "input",
        name: "use",
        message: "What is the use of the application?"
    },
    {
        type: "input",
        name: "contributions",
        message: "Are there any contribution rules?"
      },


]
).then(response =>{
    var markdown = generateMarkdown(response);
    creatNewFile("readMe" , markdown);
})

// TODO: Create a function to write README file
function creatNewFile(fileName, data) {
    //fs
    
  console.log(data); 
fs.writeFile(`${fileName}.md`,data, function(error){
    if(error){
        console.log(error)
        
    } else{
        console.log("Your README has been generated")
    }
})
}
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

