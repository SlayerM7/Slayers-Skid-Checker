console.clear();
const { red, green, blackBright, white, magentaBright } = require("chalk");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function logo() {
  console.log(` `);
  console.log(white("             ╔═╗╦╔═╦╔╦╗  ╔═╗╦ ╦╔═╗╔═╗╦╔═╔═╗╦═╗"));
  console.log(blackBright("             ╚═╗╠╩╗║ ║║  ║  ╠═╣║╣ ║  ╠╩╗║╣ ╠╦╝"));
  console.log(magentaBright("             ╚═╝╩ ╩╩═╩╝  ╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝╩╚═"));
  console.log(` `);
}
logo();
rl.question(
  magentaBright("                 > ") +
    white("Enter code language") +
    magentaBright(": "),
  (lang) => {
    let count = 0;
    goo();
    async function goo() {
      console.clear();
      logo();

      let questions = [];

      if (lang === "js") {
        questions = require("./questions.json").JS;
      } else if (lang === "py") {
        questions = require("./questions.json").PY;
      }

      let question = questions[Math.floor(Math.random() * questions.length)];

      rl.question(
        magentaBright("             > ") +
          white(question.name) +
          magentaBright(": "),
        (answerFfFfF) => {
          let answer = answerFfFfF.trim();
          let done = false;
          question.answers.some((answerG) => {
            if (done === true) return;
            if (answer.toLowerCase().includes(answerG.toLowerCase())) {
              console.log(green("             > ") + white("Correct answer"));
              setTimeout(() => {
                goo();
              }, 1000);
              done = true;
            } else {
              done = true;
              setTimeout(() => {
                goo();
              }, 1000);
              console.log(red("             > ") + white("Incorrect answer"));
            }
          });
          count++;
        }
      );
    }
  }
);
