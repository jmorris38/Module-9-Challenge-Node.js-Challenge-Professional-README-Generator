import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import fs from 'fs/promises';
import prompts from 'prompts'; // Import the 'prompts' library

// Function to generate the README content based on user input
function generateREADME(answers) {
  return `
    # ${answers.title}

    ## Description
    ${answers.description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.usage}

    ## License
    This project is licensed under the ${answers.license} license.

    ## Contributing
    ${answers.contributing}

    ## Tests
    ${answers.tests}

    ## Questions
    GitHub Profile: [${answers.github}](https://github.com/${answers.github})
    For questions or inquiries, please contact me at ${answers.email}.
  `;
}

// Questions to prompt the user
const questions = [
  {
    type: 'text',
    name: 'title',
    message: 'Enter your project title:',
  },
  {
    type: 'text',
    name: 'description',
    message: 'Enter a description of your project:',
  },
  {
    type: 'text',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'text',
    name: 'usage',
    message: 'Enter usage information:',
  },
  {
    type: 'select',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: [
      { title: 'MIT', value: 'MIT' },
      { title: 'Apache 2.0', value: 'Apache 2.0' },
      { title: 'GPL 3.0', value: 'GPL 3.0' },
      { title: 'BSD 3-Clause', value: 'BSD 3-Clause' },
      { title: 'Other', value: 'Other' },
    ],
  },
  {
    type: 'text',
    name: 'contributing',
    message: 'Enter contribution guidelines:',
  },
  {
    type: 'text',
    name: 'tests',
    message: 'Enter test instructions:',
  },
  {
    type: 'text',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'text',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// Prompt the user for input
(async () => {
  const answers = await prompts(questions);
  const readmeContent = generateREADME(answers);

  // Write the README file
  await fs.writeFile('README.md', readmeContent);
  console.log('README.md successfully created!');
})();
