const fs = require('fs');

const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js')

const util = require('util')

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your projects title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Write a description of you project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are your project installation instructions?',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'What is this project used for?',
        name: 'usage',
      },
      {
        type: 'list',
        message: 'What licenses were used in this project?',
        name: 'license',
        choices: [
            "Apache",
            "GNU",
            "MIT",
            "Mozilla",
            "Boost",
            "None"
        ]
      },
      {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contribute',
      },
      {
        type: 'input',
        message: 'Where any test performed for this project?',
        name: 'test',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'GitHub',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },

  ])

   .then((response) => 

    fs.writeFile('README.md', generateMarkdown(response), (err) =>
   err ? console.error(err) : console.log('README.md created successfully!')
  
   ));

   

