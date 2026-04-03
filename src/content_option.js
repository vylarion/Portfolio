const logotext = "VYLARION";
const meta = {
    title: "VYLARION",
    description: "Cybersecurity professional specializing in penetration testing, purple team operations, and security tool development. Portfolio showcasing reconnaissance tools and security projects.",
};

const introdata = {
    title: "I’m Samya Halder",
    animated: {
        first: "Cybersecurity Guy",
        second: "The Developer",
        third: "Music Producer",
        fourth: "Security Analyst",
    },
    description: "Scan files for malware & check websites for threats.",
    your_img_url: "https://res.cloudinary.com/dduwbdgc1/image/upload/v1757512792/DSC02407-2_lw2wzq.jpg",
};

const dataabout = {
    title: "",
    aboutme: "I break systems to make them stronger. Specializing in penetration testing and purple team operations, I bridge the gap between offense and defense—finding vulnerabilities, hardening infrastructure, and building security tools that make a difference.",
};
const worktimeline = [{
    jobtitle: "Security Analyst",
    where: "Cybersecurity Operations",
    date: "August 2025 - November 2025",
},
    // {
    //     jobtitle: "Penetration Tester",
    //     where: "Security Assessment Team",
    //     date: "2022 - 2023",
    // },
    // {
    //     jobtitle: "Junior Security Researcher",
    //     where: "Threat Intelligence",
    //     date: "2021 - 2022",
    // },
];

const skills = [
    { name: "Python" },
    { name: "Penetration Testing" },
    { name: "Incident Response" },
    { name: "Log Analysis" },
    { name: "Network Security" },
];

const services = [];

const dataprojects = [{
    title: "Reconborne",
    category: "Tool",
    description: "An advanced, AI-driven reconnaissance tool for cybersecurity professionals. Performs technology stack detection, SSL/TLS analysis, subdomain enumeration, and vulnerability correlation.",
    tech: ["Python", "Gemini API", "Wireshark", "Nmap"],
    link: "https://github.com/vylarion/reconborne",
    img: "https://picsum.photos/400/400?grayscale",
},
{
    title: "Loxtention",
    category: "Browser Extension",
    description: "A Chrome extension for real-time website security analysis and threat detection. Provides multi-layered protection against malicious content, phishing, and trackers.",
    tech: ["Svelte", "TypeScript", "FastAPI", "AI"],
    link: "https://github.com/vylarion/Loxtention",
    img: "https://picsum.photos/400/400?grayscale&random=2",
},
{
    title: "Portfolio Website",
    category: "Web Development",
    description: "A minimalist portfolio showcasing projects, skills, and professional experience. Features smooth animations, dark mode aesthetics, and a clean, modern interface built with React.",
    tech: ["React", "JavaScript", "VirusTotal API"],
    link: "/",
    img: "https://picsum.photos/400/400?grayscale&random=3",
}];

const contactConfig = {
    YOUR_EMAIL: "2k4samya@gmail.com",
    YOUR_FONE: "+91 7980026875",
    description: "Please don't contact. I am very lazy! ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_pilla1f",
    YOUR_TEMPLATE_ID: "template_oi9w33l",
    YOUR_USER_ID: "yNV6iQrzjRI8qOULT",
};

const resumeUrl = "https://drive.google.com/file/d/1rd2XID8fIJU70QGq9s4n1dMcPHk5jWUR/view?usp=sharing";

const socialprofils = {
    github: "https://github.com/vylarion",
    instagram: "https://www.instagram.com/vylarion.hkx/",
    linkedin: "https://www.linkedin.com/in/vylarion/",

};
export {
    meta,
    dataabout,
    dataprojects,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    resumeUrl,
};