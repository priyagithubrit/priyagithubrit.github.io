const output = document.getElementById("output");
const commandInput = document.getElementById("command");

const commands = {
  help: `Available Commands:
about - Personal info
experience - Work history
education - Educational background
projects - Featured projects
skills - Technical expertise
contact - Contact details
clear - Clear screen`,
  
  about: "Hi, I'm Priya. A Web Developer with 3 years of experience in PHP, Laravel, and MySQL.",
  
  experience: "3+ years as Web Developer | Laravel | Core PHP | MySQL | Vue.js",
  
  education: "B.Tech in Computer Science and Engineering.",
  
  projects: `🚀 Featured Projects:
- Laravel Admin Panel with User/Product/Order modules
- Shopify Order Sync Integration
- Vue.js + Laravel Portfolio Website`,
  
  skills: "PHP, Laravel, MySQL, Vue.js, JavaScript, HTML, CSS, Git, Shopify API",
  
  contact: "Email: priya@example.com | GitHub: github.com/priyagithubrit",
  
  clear: "clear"
};

function runCommand(cmd) {
  if (cmd === "clear") {
    output.innerHTML = "";
    return;
  }

  let response = commands[cmd] || `Command not found: ${cmd}`;
  output.innerHTML += `<div>priya@portfolio:~$ ${cmd}</div>`;
  output.innerHTML += `<div>${response}</div>`;
}

commandInput.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    let cmd = commandInput.value.trim();
    runCommand(cmd);
    commandInput.value = "";
    output.scrollTop = output.scrollHeight;
  }
});
