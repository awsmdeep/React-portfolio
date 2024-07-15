import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
// import project5 from "../assets/projects/project-5.jpg"; // Add this line for the new project image

export const HERO_CONTENT = `I am a dedicated and versatile web developer with a passion for creating efficient and user-friendly web applications. With experience in various technologies, including React, Node.js, MongoDB, and more, I strive to continuously learn and adapt to new challenges. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences. 

I thrive in collaborative environments and enjoy working with cross-functional teams to bring ideas to life. Whether it's developing responsive front-end interfaces or optimizing backend performance, I am committed to delivering high-quality code and maintaining best practices. Outside of coding, I am passionate about staying updated with the latest industry trends and exploring new frameworks that can enhance my skill set. 
`;


export const ABOUT_TEXT = `I am Deepak Kumar Das, a web developer. I have developed and integrated various web applications, showcasing my proficiency in modern web technologies and my ability to solve complex problems. I thrive in collaborative environments and enjoy staying active, exploring new technologies, and contributing to open-source projects. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023",
    role: "Web Developer Intern",
    company: "Tata Motors",
    description: `Created a Hospital Management Website to gain online access to the hospital premises. Developed the website using Node.js and MongoDB for the backend, and Handlebars and CSS for the frontend.`,
    technologies: ["Node.js", "MongoDB", "Handlebars", "CSS"],
  },
];

export const PROJECTS = [
  {
    title: "MEDTECH",
    image: project1,
    description: `Developed a web application and integrated it with machine learning via Flask. Offers a highly accurate web application for predicting Lab Tests Recommendation based on the medical history and current symptoms of the user. Build additional features like Timely Medical Reminders for users and OCR for upright scanning of Prescriptions uploaded by the users as image or pdf.`,
    technologies: ["HTML", "CSS", "Node.js", "MongoDB", "Flask"],
    github: "https://github.com/awsmdeep/MedTech-Reformed",
  },
  {
    title: "REBUILD LIFE",
    image: project2,
    description: `Developed a MERN web application that aided economically impacted families during the covid pandemic. Users could view an enumerated list of recent resources and initiatives offered by the Government and could apply for vacancies available for covid impacted families. Build additional features like Donations and Resources to learn multiple skills through the web.`,
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    github: "https://github.com/awsmdeep/Hackxlerate",
  },
  {
    title: "Hospital Management Website",
    image: project3,
    description: `I spearheaded the creation of a Hospital Management Website utilizing Handlebars, CSS, Node.js, and MongoDB, showcasing expertise in web development and database management, enhancing hospital operations and patient care.`,
    technologies: ["HTML", "CSS", "Node.js", "MongoDB"],
    github: "https://github.com/awsmdeep/hospital",
  },
  {
    title: "Slack Clone",
    image: project4,
    description: `Developed a Slack clone application using React for the frontend, MongoDB for the backend, and styled with Tailwind CSS. The application includes features like real-time messaging, channel creation, and user authentication.`,
    technologies: ["React", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/awsmdeep/simpplr-slackClone",
  },
];


export const CONTACT = {
  address: "Teclo Colony, Jamshedpur, Jharkhand",
  phoneNo: "+91 70048933777",
  email: "deepakdas538@gmail.com",
  linkedin: "https://www.linkedin.com/in/deepak-das-6588b7238/",
  github: "https://github.com/awsmdeep?tab=overview&from=2023-02-01&to=2023-02-28",
};
