// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!renderLicenseBadge){
    return`
    You do not have access to this contribution.`;
  } else {
    return`
    ${data}
    `;
    }
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/no-permission/#for-users)
    `;
  }else{
    return ''; 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
   if (license !== 'no license') {
      return `
      [${license}]
      ${renderLicenseLink(license)}
      `;
    }else{
      return ''; 
    }
  }

// TODO: Create a function to generate markdown for README
const gemerateAbout = aboutText => {
  if (!aboutText) {
    return '';
  }
  return `
  <section class="my-3' id="about">
  <h2 class="text-dark bg-primarty p-2 display-inline-block"> About Me<h2>
  <p>${aboutText}</p>
  </section>
  `;
};

function generateMarkdown(data) {
  return `# ${data.title}
  # <Your-Project-Title>

  ## Description
  ${data.desc}

  ---
  
  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
${data.installation}  
  
  ---
  ## Usage
  ${data.usage}  

  
  Provide instructions and examples for use. Include screenshots as needed.
  
  To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
  
      md
      ![alt text](assets/images/screenshot.png)
      
  ---
  
  ## Credits
  ${data.credits}  

  --- 
  ## License
  ${data.license}  

  
  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  
  ---
      
  ## How to Contribute
  ${data.contribute}  
  ---
  
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
  ---
  ## Tests
  ${data.tests}  
  
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.
`;
}

module.exports = generateMarkdown;
