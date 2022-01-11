// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;

  } else if (license === "Apache") {
    return `![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;

  } else if (license === "Boost") {
    return `![License: Boost](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;

  } else if (license === "Mozilla") {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;

  } else if (license === "GNU") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;

  } else {
    return ``;
  }
}


// If there is a license return the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
  return `https://opensource.org/licenses/MIT`;

} else if (license === "Apache") {
  return `https://opensource.org/licenses/Apache-2.0`;

} else if (license === "Boost") {
  return `https://www.boost.org/LICENSE_1_0.txt`;

} else if (license === "Mozilla") {
  return `https://opensource.org/licenses/MPL-2.0`;

} else if (license === "GNU") {
  return `https://opensource.org/licenses/MPL-2.0`;

} else {
  return ``;
}}


// Function to generate markdown for README
function generateMarkdown(response) {

  const licenseBadge = renderLicenseBadge(response.license);
  const licenseLink = renderLicenseLink(response.license);

  return `

  # ${response.title}

  ## Table of Contents
  *[Description](#description)\n
  *[Installation](#installation)\n
  *[Usage](#usage)\n
  *[Contributers](#contribute)\n
  *[Tests](#tests)\n
  *[License](#license)\n
  *[Questions](#questions)\n

  <a name='description'></a>
  ## Description

  ${response.description}

  <a name='installation'></a>
  ## Installation

  ${response.installation}

  <a name='usage'></a>
  ## Usage

  ${response.usage}

  <a name='contribute'></a>
  ## Contributers

  ${response.contribute}

  <a name='tests'></a>
  ## Test

  ${response.test}

  <a name='license'></a>
  ## Lincenses
  ${licenseBadge} ${licenseLink}

  <a name='questions'></a>
  ## Questions

  Email: ${response.email}\n
  GitHub: <a href="https://www.github.com/${response.GitHub}" target="_blank">${response.GitHub}</a>;
  

  `;
}


module.exports = generateMarkdown;
