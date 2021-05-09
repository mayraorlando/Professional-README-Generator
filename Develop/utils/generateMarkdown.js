// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  * [install](#install)
  * [projectTitle](#projectTitle)
  * [discription](#discription)
  * [license](#license)
  * [use](#use)
  * [contributions](#contributions)
  #install
  ${data.install}
  ##projectTitle
  ${data.projectTitle}
  ##discription
  ${data.discription}
  ##license
  ${data.license}
  ##use
  ${data.use}
  ##contributions
  ${data.contributions}
  
  #contact
  * email:${data.email}
  * github: ${data.github}`;

}

module.exports = generateMarkdown;
