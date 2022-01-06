// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ((license === "MIT")) {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if ((license === "Apache")) {
    return `![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if ((license === "Boost")) {
    return `![License: Boost](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
  } else if ((license === "Mozilla")) {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
  } else if ((license === "GNU")) {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else {
    return ``;
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  const licenseSection = renderLicenseSection(response.licenses);
  const licenseBadge = renderLicenseBadge(response.licenses);
  const licenseLink = renderLicenseLink(response.licenses);

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

  `;
}


module.exports = generateMarkdown;
