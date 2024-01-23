const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// Questions for gathering information about the team manager
const managerQuestions = [
  {
    type: "input",
    message: "What is the team manager's name?",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is the team manager's ID?",
    name: "managerId",
  },
  {
    type: "input",
    message: "What is the team manager's email?",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "What is the team manager's office number?",
    name: "officeNum",
  },
];

// Questions for gathering information about engineers
const engineerQuestions = [
  {
    type: "input",
    message: "What is your engineer's name?",
    name: "engineerName",
    when: (answers) => answers.teamMemType === "Engineer",
  },
  {
    type: "input",
    message: "What is your engineer's ID?",
    name: "engineerId",
    when: (answers) => answers.teamMemType === "Engineer",
  },
  {
    type: "input",
    message: "What is your engineer's email?",
    name: "engineerEmail",
    when: (answers) => answers.teamMemType === "Engineer",
  },
  {
    type: "input",
    message: "What is your engineer's Github username?",
    name: "engineerGitUsername",
    when: (answers) => answers.teamMemType === "Engineer",
  },
];

// Questions for gathering information about interns
const internQuestions = [
  {
    type: "input",
    message: "What is your intern's name?",
    name: "internName",
    when: (answers) => answers.teamMemType === "Intern",
  },
  {
    type: "input",
    message: "What is your intern's ID?",
    name: "internId",
    when: (answers) => answers.teamMemType === "Intern",
  },
  {
    type: "input",
    message: "What is your intern's email?",
    name: "internEmail",
    when: (answers) => answers.teamMemType === "Intern",
  },
  {
    type: "input",
    message: "What school is your intern attending?",
    name: "internSchool",
    when: (answers) => answers.teamMemType === "Intern",
  },
];

// Questions that repeat based on the type of team member to add
const recurringQuestions = [
  {
    type: "list",
    name: "teamMemType",
    message: "Which type of team member would you like to add?",
    choices: [
      "Engineer",
      "Intern",
      "I don't want to add any more team members",
    ],
  },
  {
    type: "input",
    message: "What is the team member's name?",
    name: "memName",
    when: (answers) =>
      answers.teamMemType === "Engineer" || answers.teamMemType === "Intern",
  },
  {
    type: "input",
    message: "What is the team member's ID",
    name: "memId",
    when: (answers) =>
      answers.teamMemType === "Engineer" || answers.teamMemType === "Intern",
  },
  {
    type: "input",
    message: "What is the team member's email?",
    name: "memEmail",
    when: (answers) =>
      answers.teamMemType === "Engineer" || answers.teamMemType === "Intern",
  },
  {
    type: "input",
    message: "What is the Engineer's Github",
    name: "memGithub",
    when: (answers) => answers.teamMemType === "Engineer",
  },
  {
    type: "input",
    message: "What is the Intern's School",
    name: "memSchool",
    when: (answers) => answers.teamMemType === "Intern",
  },
];

// Array to store team members
const teamMembers = [];

// Function to ask manager-related questions and push the manager to the teamMembers array
function askManager() {
  inquirer.prompt(managerQuestions).then((answers) => {
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.officeNum
    );
    teamMembers.push(manager);

    askRecurring();
  });
}

// Function to ask recurring questions based on the type of team member to add
function askRecurring() {
  inquirer.prompt(recurringQuestions).then((answers) => {
    if (answers.teamMemType === "I don't want to add any more team members") {
      writeToFile("index.html", render(teamMembers));
    } else {
      if (answers.teamMemType === "Engineer") {
        inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
          const engineer = new Engineer(
            answers.memName,
            answers.memId,
            answers.memEmail,
            answers.memGithub
          );
          teamMembers.push(engineer);
          askRecurring();
        });
      } else if (answers.teamMemType === "Intern") {
        inquirer.prompt(internQuestions).then((internAnswers) => {
          const intern = new Intern(
            answers.memName,
            answers.memId,
            answers.memEmail,
            answers.memSchool
          );
          teamMembers.push(intern);
          askRecurring();
        });
      }
    }
  });
}

function writeToFile(fileName, content) {
  fs.writeFile(fileName, content, (err) =>
    err ? console.log(err) : console.log("Success")
  );
}

// Start the process by asking manager-related questions
askManager();
