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

  about: `Hi, I'm Priya Singla 👩‍💻
A passionate PHP Developer with 4 years of experience.
Currently working as a Freelancer, I specialize in Laravel, PHP, MySQL, and modern web technologies.
I believe in writing clean code, building scalable apps, and solving problems effectively.`,

  experience: `💼 Work Experience

🔹 Freelancer (04/2025 - Present)
- Working on multiple freelance projects using Laravel, PHP, and Vue.js.
- Building scalable, modern web apps for clients worldwide.

🔹 Software Developer - Anviam Solutions (03/2023 - 04/2025)
- Built a robust student management system for admissions
- Implemented CSV data export, payment gateway, and workflows
- Managed databases using Laravel ORM

🔹 Software Developer - iTech Vision, Mohali (03/2022 - 02/2023)
- Developed scalable backend systems in Laravel
- Integrated 3rd-party APIs (food delivery, content discovery)
- Implemented secure authentication and role-based access control
- Optimized code for performance and scalability`,

  education: `🎓 Education
- MCA, Asra Institute of Advanced Studies, India
- BCA, Desh Bhagat College, India`,

  projects: `🚀 Featured Projects
1. NIFTEM - Admission & Student Management (Laravel + MySQL)
2. USSD Money Transfer Platform (Laravel + MySQL, SMS-based)
3. V-APPS - Full CMS (Laravel + Vue.js)
4. Tryzeffy - Deals & Restaurant Finder in Japan (Laravel)
5. WOWS Global - Investment Ecosystem for Startups (Laravel)
6. Urawarrior - Mental Wellness Platform (Laravel)
7. Laravel Admin Panel with User, Product, Order modules
8. Shopify Order Sync Integration`,

  skills: `🛠️ Skills
- Backend: PHP, Laravel, CodeIgniter
- Frontend: HTML, CSS, JavaScript, Vue.js
- Database: MySQL, Redis
- APIs: REST APIs, Shopify API
- Tools: Git, Jira
- Soft Skills: Communication, Problem Solving, Teamwork, Time Management`,

  contact: `📧 Contact
- Email: singlap047@gmail.com
- Phone: +91 98777-09698
- GitHub: github.com/priyagithubrit
- LinkedIn: linkedin.com/in/priya-singla-69a20a244`,

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
