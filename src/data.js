// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithubSquare,
  FaLink,
} from "react-icons/fa";
import { SiJavascript, SiStyledcomponents, SiRedux } from "react-icons/si";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";
import Project1 from "./images/project1.png";
import Project2 from "./images/project2.png";
import Project3 from "./images/project3.png";
import Project4 from "./images/project4.png";
import Project5 from "./images/project5.png";
import Project6 from "./images/project6.png";
import Project7 from "./images/project7.png";
import Project8 from "./images/project8.png";
import Project9 from "./images/project9.png";
import Project10 from "./images/project10.png";
import Project11 from "./images/project11.png";
import Project12 from "./images/project12.png";
import Project14 from "./images/project14.png";
import Project15 from "./images/project15.png";
import Project16 from "./images/project16.png";
import Project17 from "./images/project17.png";
import Project18 from "./images/project18.png";
import Project19 from "./images/project19.png";
import Project20 from "./images/project20.png";
import Project21 from "./images/project21.png";
import Project22 from "./images/project22.png";
import Project23 from "./images/project23.png";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/white-hero2.png";
import HeroDark from "./images/dark-theme-img.png";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "xcheckbox";
export const repository = "react-projects"

// Blog link icon (imported above)
export const Blog = <FaLink />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, Bootstrap, Redux, and the GitHub REST API.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <FaBootstrap className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <SiStyledcomponents className="display-4" />,
    name: "Styled Components",
  },
  {
    id: 7,
    skill: <SiRedux className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
];

export const projectsData = [
  {
    id: 1,
    name: "Birthday Reminder",
    image: Project1,
    url: "https://spg-react-1-birthday-reminder.netlify.app/"
  },
  {
    id: 2,
    name: "Tours",
    image: Project2,
    url: "https://spg-react-2-tours.netlify.app/"
  },
  {
    id: 3,
    name: "Reviews",
    image: Project3,
    url: "https://spg-react-3-reviews.netlify.app/"
  },
  {
    id: 4,
    name: "Accordion",
    image: Project4,
    url: "https://spg-react-4-accordion.netlify.app/"
  },
  {
    id: 5,
    name: "Menu",
    image: Project5,
    url: "https://spg-react-5-menu.netlify.app/"
  },
  {
    id: 6,
    name: "Tabs",
    image: Project6,
    url: "https://spg-react-6-tab.netlify.app/"
  },
  {
    id: 7,
    name: "Slider",
    image: Project7,
    url: "https://spg-react-7-slider.netlify.app/"
  },
  {
    id: 8,
    name: "Lorem Ipsum",
    image: Project8,
    url: "https://spg-react-8-lorem-ipsum.netlify.app/"
  },
  {
    id: 9,
    name: "Color Generator",
    image: Project9,
    url: "https://spg-react-9-color-generator.netlify.app/"
  },
  {
    id: 10,
    name: "Grocery Bud",
    image: Project10,
    url: "https://spg-react-10-grocery-bud.netlify.app/"
  },
  {
    id: 11,
    name: "Navbar",
    image: Project11,
    url: "https://spg-react-11-navbar.netlify.app/"
  },
  {
    id: 12,
    name: "Sidebar And Modal",
    image: Project12,
    url: "https://spg-react-12-sidebar-modal.netlify.app/"
  },
  {
    id: 14,
    name: "Cart",
    image: Project14,
    url: "https://spg-react-14-cart.netlify.app/"
  },
  {
    id: 15,
    name: "Cocktails",
    image: Project15,
    url: "https://spg-react-15-cocktails.netlify.app/"
  },
  {
    id: 16,
    name: "Markdown Preview",
    image: Project16,
    url: "https://spg-react-16-markdown-preview.netlify.app/"
  },
  {
    id: 17,
    name: "Random Person",
    image: Project17,
    url: "https://spg-react-17-random-person.netlify.app/"
  },
  {
    id: 18,
    name: "Pagination",
    image: Project18,
    url: "https://spg-react-18-pagination.netlify.app/"
  },
  {
    id: 19,
    name: "Stock Photos",
    image: Project19,
    url: "https://spg-react-19-stock-photos.netlify.app/"
  },
  {
    id: 20,
    name: "Dark Mode",
    image: Project20,
    url: "https://spg-react-20-dark-mode.netlify.app/"
  },
  {
    id: 21,
    name: "Movies DB",
    image: Project21,
    url: "https://spg-react-21-movies-db.netlify.app/"
  },
  {
    id: 22,
    name: "Hacker News",
    image: Project22,
    url: "https://spg-react-22-hacker-news.netlify.app/"
  },
  {
    id: 23,
    name: "Quiz",
    image: Project23,
    url: "https://spg-react-23-quiz.netlify.app/"
  },
]

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
