// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {
  
  let tocDraft = `## Table of Contents`;
  
  if(userResponses.install !== ''){tocDraft += `
  * [Installation](*installation)`};

  if(userResponses.install !== ''){tocDraft += `
  * [Usage](#usage)`};

  if(userResponses.install !== ''){tocDraft += `
  * [Contributions](#contributions)`};

  if(userResponses.install !== ''){tocDraft += `
  * [Test](#test)`};
  

  
  let readmeDraft = 
  `# ${userResponses.title}
  ## Description
  *Here's whats going on*
  ${userResponses.description} 
  `

  readmeDraft += tocDraft;

  readmeDraft += `
  * [License](*license)`;

  if (userResponses.install !== ''){
    readmeDraft +=
    `
    ## Installation
    *There are steps required to install this project:*
    ${userResponses.install}
    `
  };

  if (userResponses.use !== ''){
    readmeDraft +=
    `
    ## Usage
    💻* Instructions*
    ${userResponses.use}`
  };
  
  if (userResponses.contribute !== ''){ 
    `
    ## Contributions
    *Want to contribute? Here's how!*
    ${userResponses.contribute}`
  };

  if (userResponses.test !== ''){
    readmeDraft +=
    `
    ## Test
    *Here are any tests for the application (if neccesary)*
    ${userResponses.test}`
  };
    
  readmeDraft +=
  `
  ## License
  ${userResponses.license}
  `;

  let devDraft =
  `
  ---
  ## Question(s)
  ![Developer Pic](${userInfo.avatar_url})
 Contact me at:
  GitHub: [@${userInfo.login}](${userInfo.url})
  `;

  if (userInfo.email !== null){
    readmeDraft +=
    `
    Email: ${userInfo.email}
    `
  };

  readmeDraft +=devDraft;

  return readmeDraft;

}

module.exports = generateMarkdown;
