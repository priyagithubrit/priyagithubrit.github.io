const output = document.getElementById("output");
const commandInput = document.getElementById("command");

// ✅ ASCII Banner with your full name
const banner = `
 ____       _                     ____  _             _       
|  _ \\ _ __(_)_   _ _ __   __ _  / ___|| | ___   __ _| | __ _ 
| |_) | '__| | | | | '_ \\ / _\` | \\___ \\| |/ _ \\ / _\` | |/ _\` |
|  __/| |  | | |_| | | | | (_| |  ___) | | (_) | (_| | | (_| |
|_|   |_|  |_|\\__,_|_| |_|\\__, | |____/|_|\\___/ \\__, |_|\\__,_|
                           |___/                |___/        

Welcome to Priya Singla's Terminal Portfolio!  
Type 'help' to see available commands.
`;

const commands = {
  help: `📌 Available Commands:
👉 <b>about</b> - Personal info  
👉 <b>experience</b> - Work history  
👉 <b>education</b> - Educational background  
👉 <b>projects</b> - Featured projects  
👉 <b>skills</b> - Technical expertise  
👉 <b>contact</b> - Contact details  
👉 <b>clear</b> - Clear screen`,

  about: `🙋‍♀️ <b>About Me</b>  
Hi, I'm <b>Priya Singla</b> 👩‍💻  
A passionate <b>PHP Developer</b> with 4 years of experience.  
✨ Freelancer specializing in <b>Laravel, PHP, MySQL, Vue.js</b>.  
I believe in writing clean code, building scalable apps, and solving problems effectively.`,

  experience: `💼 <b>Work Experience</b>  

🔹 <b>Freelancer (04/2025 - Present)</b>  
&nbsp;&nbsp;🚀 Working on Laravel + Vue.js projects  
&nbsp;&nbsp;🌍 Delivering scalable apps for clients worldwide  

🔹 <b>Software Developer - Anviam Solutions (03/2023 - 04/2025)</b>  
&nbsp;&nbsp;📚 Built student management system  
&nbsp;&nbsp;💳 Implemented CSV export & payments  
&nbsp;&nbsp;🗄️ Managed Laravel ORM databases  

🔹 <b>Software Developer - iTech Vision, Mohali (03/2022 - 02/2023)</b>  
&nbsp;&nbsp;⚡ Developed scalable backend systems  
&nbsp;&nbsp;🔑 Implemented secure authentication  
&nbsp;&nbsp;🔗 Integrated APIs (Food Delivery, Content)`,

  education: `🎓 <b>Education</b>  
📘 MCA - Asra Institute of Advanced Studies, India  
📗 BCA - Desh Bhagat College, India`,

  projects: `🚀 <b>Featured Projects</b>  
1️⃣ NIFTEM - Admission & Student Management (Laravel + MySQL)  
2️⃣ USSD Money Transfer Platform (Laravel + MySQL, SMS-based)  
3️⃣ V-APPS - Full CMS (Laravel + Vue.js)  
4️⃣ Tryzeffy - Deals & Restaurant Finder in Japan (Laravel)  
5️⃣ WOWS Global - Investment Ecosystem (Laravel)  
6️⃣ Urawarrior - Mental Wellness Platform (Laravel)  
7️⃣ Laravel Admin Panel - User, Product, Order modules  
8️⃣ Shopify Order Sync Integration`,

  skills: `🛠️ <b>Skills</b>  
💻 Backend: PHP, Laravel, CodeIgniter  
🎨 Frontend: HTML, CSS, JavaScript, Vue.js  
🗄️ Database: MySQL, Redis  
🔗 APIs: REST APIs, Shopify API  
⚙️ Tools: Git, Jira  
🤝 Soft Skills: Communication, Problem Solving, Teamwork`,

  contact: `📧 <b>Contact</b>  
<i class="fas fa-envelope"></i> Email: <a href="mailto:singlap047@gmail.com">singlap047@gmail.com</a>  
<i class="fas fa-phone"></i> Phone: <a href="tel:+919877709698">+91 98777-09698</a>  
<i class="fab fa-github"></i> GitHub: <a href="https://github.com/priyagithubrit" target="_blank">github.com/priyagithubrit</a>  
<i class="fab fa-linkedin"></i> LinkedIn: <a href="https://linkedin.com/in/priya-singla-69a20a244" target="_blank">linkedin.com/in/priya-singla</a>`,

  clear: "clear"
};

function runCommand(cmd) {
  if (cmd === "clear") {
    output.innerHTML = "";
    return;
  }

  let response = commands[cmd] || `❌ Command not found: ${cmd}`;
  output.innerHTML += `<div class="cmd">priya@portfolio:~$ ${cmd}</div>`;
  output.innerHTML += `<div class="response">${response}</div>`;
}

// ✅ Show banner at the start
output.innerHTML = `<pre class="banner">${banner}</pre>`;

commandInput.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    let cmd = commandInput.value.trim();
    runCommand(cmd);
    commandInput.value = "";
    output.scrollTop = output.scrollHeight;
  }
});
