// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //sets badge to empty string
  let badge = ``;
//switch case for input licenses
  switch(license){
    case "MIT":
      badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      return badge;
    case "BSD":
      badge = "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)"
    case "GPL":
    badge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    return badge;
    case "Apache":
    badge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    return badge;
    //breaks if no license
    default: break;
  }

}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
switch(license){
  case "MIT":
    link = `[${license}](https://opensource.org/licenses/MIT)`;
    return link;
  case "BSD":
    link = `[${license}](https://opensource.org/licenses/BSD-3-Clause)`;
    return link;
  case "GPL":
    link = `[${license}](https://www.gnu.org/licenses/gpl-3.0)`;
    return link;
  case "Apache": 
    link = `[${license}](https://opensource.org/licenses/Apache-2.0)`;
    return link;
    default: break;
}


}


// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
 return `This project is licensed under a ${license} license.`;
  }
  return "";
}


// function to generate markdown for README
function generateMarkdown(answers) {

  return `
  # ${answers.title}

  ${renderLicenseBadge(answers.license)}

  ## Table of Contents
- [Description](#description)
- [Usage Information](#usage-information)
- [Installation Instructions](#installation-instructions)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)
- [Test Instructions](#test-instructions)
- [Questions](#questions)

  ## Description
  ${answers.description}
  ## Usage Information
  ${answers.usage}
  ## Installation Instructions
  ${answers.installation}
  ## Contribution Guidelines
  ${answers.contributionGuidelines}
  ## License
  ${renderLicenseLink(answers.license)}\n
  ${renderLicenseSection(answers.license)}
  ## Test Instructions
  ${answers.test}
  ## Questions
  [GitHub: ${answers.github}](https://github.com/${answers.github})\n
  ${answers.email}
`;
}

module.exports = generateMarkdown;
