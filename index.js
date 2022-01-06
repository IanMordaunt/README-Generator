const fs = require('fs');

const inquirer = require('inquirer');


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is you project title?',
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
            'Apache',
            'GNU',
            'MIT',
            'Mozilla',
            'Open',
            'None'
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


 

  function generateMarkdown(response) {

    return `

    #${response.title}

    ## Table of Contents
    *[Description](#description)
    *[Installation](#installation)
    *[Usage](#usage)
    *[Contributers](#contribute)
    *[Tests](#tests)
    *[License](#license)
    *[Questions](#questions)

    <a name='description'></a>
    ##Description

    ${response.description}

    <a name='installation'></a>
    ##Installation

    ${response.installation}

    <a name='usage'></a>
    ##Usage

    ${response.usage}

    <a name='contribute'></a>
    ##Contributers

    ${response.contribute}

    <a name='tests'></a>
    ##Test

    ${response.test}

    <a name='license'></a>
    [License: ${response.license}]

    <a name='questions'></a>
    ##Questions

    [Email me: ${response.email}] 

    `
  }

// function init() {

//     const finalReadMe = generateMarkdown(response)

//     fs.writeFile('README.md', finalReadMe), (err) =>
//           err ? console.error(err) : console.log('README.md successfully created!');

// }

// init();




 // console.log('README.md created successfully');

 
//       fs.writeFile('README.md', JSON.stringify(response), (err) =>
//       err ? console.error(err) : console.log('Commit logged!')
//   ));

