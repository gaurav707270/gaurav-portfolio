// ===== EDIT YOUR LINKS HERE =====
export const GITHUB_URL = "";  // e.g. "https://github.com/yourname"
export const RESUME_URL = "/Gaurav_Kharate_Resume.pdf"; // file in /public (replace the PDF to update)
// Contact form: get a FREE access key at https://web3forms.com (enter gauravkharate.dev@gmail.com, key arrives by email)
export const WEB3FORMS_KEY = "";
export const EMAIL = "gauravkharate.dev@gmail.com";
export const PHONE = "+91-9309968779";
export const LINKEDIN_URL = "https://www.linkedin.com/in/kharategaurav7072/";
export const DRIVE_URL = "https://drive.google.com/drive/folders/1uYfpXkNqJo4yIpkslUsF4DGDbHiKEQRA?usp=drive_link";

// Returns the real link if set, otherwise an email request so buttons never break.
export const githubLink = () => GITHUB_URL ? { href: GITHUB_URL, target: "_blank", rel: "noopener" } : { href: `mailto:${EMAIL}?subject=GitHub%20link%20request` };
export const resumeLink = () => ({ href: RESUME_URL, target: "_blank", rel: "noopener", download: "Gaurav_Kharate_Resume.pdf" });

export const NAV = ["Home", "About", "Skills", "Experience", "Projects", "Certifications", "Resume", "Contact"];

export const STATS = [["6 mo", "Full Stack internship"], ["3", "Full-stack projects"], ["4", "RBAC roles implemented"], ["50+", "JS & DSA problems solved"]];

export const SKILLS = [
  { title: "Core MERN stack", key: true, items: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "JavaScript (ES6+)"] },
  { title: "Frontend", items: ["HTML5", "CSS3", "Bootstrap", "React Hooks", "React Router", "Responsive Design"] },
  { title: "Backend & Database", items: ["RESTful APIs", "Middleware", "MVC", "Mongoose", "Axios", "JSON Server"] },
  { title: "Auth & Security", key: true, items: ["JWT", "Authorization", "Protected Routes", "RBAC"] },
  { title: "Languages", items: ["JavaScript", "Python", "C"] },
  { title: "Tools & Concepts", items: ["Git", "GitHub", "VS Code", "Postman", "npm", "Vite", "DSA", "OOP"] },
];

export const EXPERIENCE = {
  role: "Full Stack Developer Intern", company: "Maxima Gaming Studio", duration: "6 months",
  points: [
    "Developed full-stack application features using React.js, Node.js and Express.js.",
    "Built reusable React.js components and responsive user interfaces.",
    "Developed and integrated RESTful APIs for frontend-backend communication.",
    "Integrated MongoDB and Mongoose for data storage and backend data management.",
    "Implemented JWT-based authentication and protected functionality to secure resources.",
    "Connected frontend to APIs with Axios and managed API-driven state.",
    "Debugged frontend, backend, API and authentication issues; used Git and GitHub.",
  ],
  tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Axios"],
};

export const EDUCATION = { degree: "B.Tech, Information Technology (2022 – Present)", school: "Bhagwan Mahavir University, India", extra: "Full Stack Web Development training, Red & White Multimedia Education" };

export const FEATURED = {
  name: "Core Banking System", label: "FEATURED · MERN STACK",
  summary: "Full-stack banking app built to support 3 branches and 20,000+ account holders, with four staff roles.",
  problem: "A banking system has several staff roles that need different levels of access to the same data.",
  solution: "A MERN app using JWT authentication, protected routes and role-based access control for Admin, Manager, Branch Manager and Employee.",
  architecture: [["React + Redux Toolkit", "Responsive dashboards, protected routes"], ["Express REST APIs", "JWT auth, RBAC authorization"], ["MongoDB + Mongoose", "Users, accounts, branches, employees, transactions"]],
  features: ["JWT authentication and authorization", "Role-based access for 4 roles", "RESTful APIs and MongoDB data models", "Responsive dashboards with centralized Redux state"],
  role: "Developed the full stack: REST APIs, data models, authentication/authorization and the React dashboards.",
  tech: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Bootstrap"],
};

export const PROJECTS = [
  { name: "Interview Preparation & Resume Analysis System", label: "MERN STACK",
    problem: "Candidates need interview prep tailored to a job description.", built: "A MERN app that analyzes a resume and generates prep material.",
    features: ["PDF upload and text extraction with validation and error handling", "REST APIs and MongoDB for candidate data and reports", "AI-based analysis, interview questions and recommendations"],
    tech: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "AI"] },
  { name: "HRMS – Human Resource Management System", label: "REACT.JS",
    problem: "HR teams need one place for employees, attendance and leave.", built: "A React HRMS with employee, attendance, leave and dashboard modules.",
    features: ["Redux Toolkit for centralized, API-driven state", "Reusable responsive components with REST API integration"],
    tech: ["React.js", "Redux Toolkit", "Bootstrap", "JSON Server", "REST APIs"] },
];
