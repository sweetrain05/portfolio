import {
    BsLinkedin,
    BsGithub,
    BsFillEnvelopeFill,
    BsJustifyLeft,
    BsGeoAltFill,
} from 'react-icons/bs';
import { LuExternalLink } from 'react-icons/lu';
import { CgFigma } from 'react-icons/cg';
import reactImg from '../assets/images/skills/react.svg';
import reduxImg from '../assets/images/skills/redux.svg';
import jsImg from '../assets/images/skills/javascript.svg';
import tsImg from '../assets/images/skills/typescript.svg';
import scssImg from '../assets/images/skills/scss.svg';
import cssImg from '../assets/images/skills/css3.svg';
import htmlImg from '../assets/images/skills/html5.svg';
import bootstrapImg from '../assets/images/skills/bootstrap.svg';
import antDesignImg from '../assets/images/skills/antDesign.svg';
import figmaImg from '../assets/images/skills/figma.svg';
import eslintImg from '../assets/images/skills/eslint.svg';
import tailwindImg from '../assets/images/skills/tailwindCSS.svg';
import tanstackQueryImg from '../assets/images/skills/tanstackQuery.svg';
import cypressImg from '../assets/images/skills/cypress.svg';
import nodeImg from '../assets/images/skills/node.svg';
import expressImg from '../assets/images/skills/express.svg';
import mongodbImg from '../assets/images/skills/mongodb.svg';
import mysqlImg from '../assets/images/skills/mysql.svg';
import postmanImg from '../assets/images/skills/postman.svg';
import swaggerImg from '../assets/images/skills/swagger.svg';
import restapiImg from '../assets/images/skills/restapi.svg';
import jiraImg from '../assets/images/skills/jira.svg';
import confluenceImg from '../assets/images/skills/confluence.svg';
import githubImg from '../assets/images/skills/github.svg';
import gitImg from '../assets/images/skills/git.svg';
import npmImg from '../assets/images/skills/npm.svg';
import vercelImg from '../assets/images/skills/vercel.svg';
import vscodeImg from '../assets/images/skills/vscode.svg';
import youngLeeHanImg from '../assets/images/projects/YoungLeeHan Ecommerce.png';
import witnessPartnersImg from '../assets/images/projects/Corp Website.png';
import weatherAppImg from '../assets/images/projects/Weather Web App.png';
import lgLogo from '../assets/images/projects/LGHausys_logo.png';
import portfolioImg from '../assets/images/projects/Portfolio.png';
import buttonPlaygroundImg from '../assets/images/projects/buttonPlayground.png';
import hrSolutionImg from '../assets/images/projects/HRSolution.png';

export const mobileWidth = 480;
export const tabletWidth = 767;
export const desktopWidth = 1024;

export const navList = [
    { title: 'home', to: '/' },
    { title: 'experiences', to: '/experiences' },
    { title: 'skills', to: '/skills' },
    { title: 'contact', to: '/contact' },
];

export const extLinkList = [
    {
        icon: BsLinkedin,
        link: 'https://www.linkedin.com/in/danbi-choi/',
        linkTitle: 'Linked in',
    },
    {
        icon: BsGithub,
        link: 'https://github.com/sweetrain05',
        linkTitle: 'Github',
    },
    {
        icon: BsFillEnvelopeFill,
        link: 'mailto:sweetrain05@hotmail.com',
        linkTitle: 'Send Email',
    },
];

export const highlightWorks = [
    {
        title: 'ECommerce Web App.',
        subtitle: 'YoungLeeHan Korean, U.S.',
        description:
            'A dynamic mobile-responsive web app created using MERN stack.',
        link: [
            {
                icon: BsJustifyLeft,
                to: '/experiences#ECommerceWebsite',
                linkTitle: 'read more',
            },
            {
                icon: BsGithub,
                to: 'https://github.com/YoungLeeHan/YoungleehanKorean',
                linkTitle: 'github',
            },
            {
                icon: LuExternalLink,
                to: 'https://youngleehankorean.com/',
                linkTitle: 'demo',
            },
        ],
        image: youngLeeHanImg,
        skills: ['React', 'NodeJS'],
    },
    {
        title: 'Portfolio Website',
        subtitle: 'My Portfolio',
        description:
            'A responsive website coded with TypeScript achieving a score above 95 in all Lighthouse evaluations.',
        link: [
            {
                icon: BsJustifyLeft,
                to: '/experiences#PortfolioWebsite',
                linkTitle: 'read more',
            },
            {
                icon: BsGithub,
                to: 'https://github.com/sweetrain05/portfolio',
                linkTitle: 'github',
            },
            {
                icon: LuExternalLink,
                to: 'https://www.danbichoi.com',
                linkTitle: 'demo',
            },
        ],
        image: portfolioImg,
        skills: ['TypeScript', 'React'],
    },
    {
        title: 'Corporate Website',
        subtitle: 'Witness Creative Corp., U.S.',
        description:
            'A mobile-responsive website introducing the company and dynamically listing articles fetched from Medium blog using RESTful API.',
        link: [
            {
                icon: BsJustifyLeft,
                to: '/experiences#CorporateWebsite',
                linkTitle: 'read more',
            },
            {
                icon: BsGithub,
                to: 'https://github.com/sweetrain05/witness-creative-react',
                linkTitle: 'github',
            },
            {
                icon: LuExternalLink,
                to: 'https://react-webiste-witness-creative-inc.vercel.app/',
                linkTitle: 'demo',
            },
        ],
        image: witnessPartnersImg,
        skills: ['React'],
    },
];

export const experiencesCardData = [
    {
        jobTitle: 'Full-stack Developer',
        title: 'ECommerce Web App.',
        subtitle: 'YoungLeeHan Korean, U.S. | Jan. 2023 - present',
        image: youngLeeHanImg,
        description:
            'Developed a dynamic e-commerce website that offers K-culture blog and a platform for selling learning materials.',
        link: [
            {
                icon: BsGithub,
                to: 'https://github.com/sweetrain05/YoungleehanKorean',
                linkTitle: 'github',
            },
            {
                icon: CgFigma,
                to: 'https://www.figma.com/file/MIrWsyWmRhPKf4AkfpPIBR/YoungLeeHan-Korean-(Copy)?node-id=0%3A1&mode=dev',
                linkTitle: 'figma',
            },
            {
                icon: LuExternalLink,
                to: 'https://youngleehankorean.com/',
                linkTitle: 'demo',
            },
        ],
        frontend: [
            'React',
            'JavaScript ES6',
            'HTML5',
            'SASS',
            'Bootstrap',
            'Ant Design',
            'AJAX',
            'REST API',
            'Figma',
            'Responsive Design',
        ],
        backend: [
            'Node.js',
            'Express.js',
            'MongoDB',
            'ERD',
            'REST API',
            'Braintree',
            'JWT',
            'Multer',
            'AWS S3',
            'Nodemailer',
            'Postman',
            'Swagger',
        ],
        explanation: [
            'Developed a personal business website that supports e-commerce and content management using <span>React, NodeJS, and Express</span>.',
            'Created a <span>mobile-responsive</span>, <span>pixel-perfect</span> design that aligns with the <span>Figma</span> design using <span>SASS, Bootstrap, and Ant Design</span> UI components.',
            'Integrated <span>Braintree</span> for payment, <span>JWT token</span> for authentication, <span>Nodemailer</span> for e-mail verification, <span>Multer</span> for <span>AWS S3</span> storage, and <span>React-quill</span> as text editor.',
            'Designed role-based user access and developed an <span>admin page</span> for product management.',
            'Constructed <span>ERD</span> and adopted <span>Swagger documentation</span> to make communication efficient and clear.',
        ],
    },
    {
        jobTitle: 'Frontend Engineer',
        title: 'Web App.',
        subtitle: 'HR Solutions | July 2023 - present',
        image: hrSolutionImg,
        description:
            'An HR solution web application tailored for small businesses, enhancing PTO and part-time employee management.',
        frontend: [
            'TypeScript',
            'React',
            'Redux',
            'HTML5',
            'SASS',
            'AJAX',
            'REST API',
            'Figma',
        ],
        explanation: [
            'Led front-end development of the project using <span>TypeScript, React, Redux, and BEM methodology</span>.',
            'Developed common <span>UI component libraries</span> and integrated them into the service.',
            'Collaborated  with an <span>8-member team</span>, including an architect, backend engineers, a designer, a product manager, and a scrum master, aiming at the <span>commercial launch</span> of the application.',
            'Employed <span>Agile methodologies</span>, managing tasks through a <span>strict Jira ticket system</span>.',
        ],
    },
    {
        jobTitle: 'Frontend Developer',
        title: 'Corporate Website',
        subtitle: 'Witness Creative Corp., U.S. | May - Jun. 2023',
        image: witnessPartnersImg,
        description:
            'Built a mobile-responsive website introducing the company and dynamically listing articles fetched from blog.',
        link: [
            {
                icon: BsGithub,
                to: 'https://github.com/sweetrain05/witness-creative-react',
                linkTitle: 'github',
            },
            {
                icon: CgFigma,
                to: 'https://www.figma.com/file/5kHQgvxup732yP5bTWsQpO/Witness-Corp.?mode=dev',
                linkTitle: 'figma',
            },
            {
                icon: LuExternalLink,
                to: 'https://react-webiste-witness-creative-inc.vercel.app/',
                linkTitle: 'demo',
            },
        ],
        frontend: [
            'React',
            'JavaScript ES6',
            'HTML5',
            'SASS',
            'AJAX',
            'REST API',
            'Figma',
            'Responsive Design',
        ],
        explanation: [
            'Built a <span>mobile-responsive</span> website for a client from scratch.',
            'Integrated <span>RapidAPI</span> to retrieve user articles from their <span>Medium blog</span>.',
            'Integrated <span>Mailchimp</span> for e-mail subscription and <span>Formspree</span> for contact page.',
            'Deployed the website to <span>Vercel</span> and established a connection to <span>Google domain</span>.',
            'Managed <span>end-to-end development lifecycle</span>, from Figma design to deployment.',
            'Developed the same page using <span>vanilla JavaScript and Webpack</span>. <a href="https://website-witness-partners-5j0cafjij-sweetrain05.vercel.app/" target="_blank" aria-label="Open Link to view demo"><span class="explanation-link">[View Demo]</span></a>',
        ],
    },
    {
        jobTitle: 'Product Manager',
        title: 'Product Management & Marketing',
        subtitle: 'LG Hausys, Ltd., Seoul, South Korea | 2014 - 2018',
        image: lgLogo,
        explanation: [
            'Demonstrated strategic product management, setting and executing bi-weekly <span>action plans</span>, and fostering smooth <span>collaboration across diverse teams</span>, including engineers, designers, and sales departments.',
            '<span>Designed wireframes and developed marketing materials</span>, such as product websites, sample books, brochures, product application guides, and conference booths contributing to the successful launch of 2-3 new products annually, tailored for both global and local markets.',
            '<span>Partnered with global sales teams on B2B product development</span>, ensuring that offerings were aligned with market demands and environmental standards.',
            'Managed online product updates, sustainability reports, and corporate communications, ensuring brand consistency and market relevance.',
        ],
    },
];

export const projectsCardData = [
    {
        title: 'Portfolio Website',
        subtitle: 'My portfolio | Nov. 2023',
        image: portfolioImg,
        description:
            'Crafted a sophisticated online portfolio to exhibit my latest projects and skills, presenting a comprehensive overview of my professional capabilities.',
        link: [
            {
                icon: BsGithub,
                to: 'https://github.com/sweetrain05/portfolio',
                linkTitle: 'github',
            },
            {
                icon: CgFigma,
                to: 'https://www.figma.com/file/AwbxfP9w0xFnRT4hELEQuv/Portfolio?node-id=0%3A1&mode=dev',
                linkTitle: 'figma',
            },
            {
                icon: LuExternalLink,
                to: 'https://www.danbichoi.com/',
                linkTitle: 'demo',
            },
        ],
        frontend: [
            'TypeScript',
            'React',
            'Hooks',
            'HTML5',
            'SASS',
            'AJAX',
            'Figma',
            'Responsive Design',
            'Accessibility',
            'Cypress',
        ],
        explanation: [
            'Achieved high-performance benchmarks, with <span>scores exceeding 95 in Lighthouse</span> evaluations across performance, accessibility, best practices, and SEO.',
            'Designed and engineered a mobile-responsive, four-page website using TypeScript and React emphasizing <span>accessibility</span> to ensure a seamless UX across various devices.',
            'Applied end-to-end testing using Cypress.',
            'Developed through <span>end-to-end lifecycle</span>, from Figma design to deployment, demonstrating a thorough understanding of the development process.',
        ],
    },
    {
        title: 'Web App.',
        subtitle: 'Weather and News by Zip Code | Oct. 2022',
        image: weatherAppImg,
        description:
            'Built a site enabling users to search for local weather and related news articles by entering their zip code.',
        link: [
            {
                icon: BsGithub,
                to: 'https://github.com/sweetrain05/zipcode-search',
                linkTitle: 'github',
            },
            {
                icon: LuExternalLink,
                to: 'https://zipcode-search-one.vercel.app/',
                linkTitle: 'demo',
            },
        ],
        frontend: [
            'React',
            'JavaScript ES6',
            'HTML5',
            'CSS3',
            'AJAX',
            'REST API',
            'Responsive Design',
        ],
        explanation: [
            'Incorporated <span>chaining HTTP requests</span> to four different <span>public APIs(Rapid APIs, NewsCatcher)</span>, utilizing user-entered zip code to extract location details, which was chained to fetch real-time information on weather, time of the day, and local news.',
        ],
    },
    {
        title: 'Web App.',
        subtitle: 'Button Playground | Oct. 2022',
        image: buttonPlaygroundImg,
        description:
            'Built a site enabling users to easily design a custom button and get code snippet instantly.',
        link: [
            {
                icon: BsGithub,
                to: 'https://github.com/sweetrain05/button_playground',
                linkTitle: 'github',
            },
            {
                icon: LuExternalLink,
                to: 'https://sweetrain05.github.io/button_playground/',
                linkTitle: 'demo',
            },
        ],
        frontend: ['JavaScript ES6', 'HTML5', 'CSS3', 'Responsive Design'],
        explanation: [
            'Created an <span>interactive, mobile-responsive</span> web app using core front-end technologies such as <span>vanilla JavaScript</span>.',
        ],
    },
];

export const contactLinks = [
    {
        icon: BsLinkedin,
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/danbi-choi/',
    },
    { icon: BsGithub, title: 'Github', link: 'https://github.com/sweetrain05' },
    {
        icon: BsFillEnvelopeFill,
        title: 'sweetrain05@hotmail.com',
        link: 'mailto:sweetrain05@hotmail.com',
    },
    { icon: BsGeoAltFill, title: 'San Francisco Bay Area' },
];

export const skillList = [
    {
        title: 'Front-end Technologies',
        list: [
            { name: 'React', image: reactImg },
            { name: 'Redux', image: reduxImg },
            { name: 'JavaScript', image: jsImg },
            { name: 'TypeScript', image: tsImg },
            { name: 'HTML5', image: htmlImg },
            { name: 'CSS3', image: cssImg },
            { name: 'SCSS', image: scssImg },
            { name: 'Tailwind CSS', image: tailwindImg },
            { name: 'Bootstrap', image: bootstrapImg },
            { name: 'Ant Design', image: antDesignImg },
            { name: 'Tanstack Query', image: tanstackQueryImg },
            { name: 'Figma', image: figmaImg },
            { name: 'Eslint', image: eslintImg },
            { name: 'Cypress', image: cypressImg },
        ],
    },
    {
        title: 'Back-end Technologies',
        list: [
            { name: 'NodeJS', image: nodeImg },
            { name: 'ExpressJS', image: expressImg },
            { name: 'MongoDB', image: mongodbImg },
            { name: 'MySQL', image: mysqlImg },
            { name: 'Postman', image: postmanImg },
            { name: 'Swagger', image: swaggerImg },
            { name: 'REST API', image: restapiImg },
        ],
    },
    {
        title: 'Other Tools',
        list: [
            { name: 'Jira', image: jiraImg },
            { name: 'Confluence', image: confluenceImg },
            { name: 'Github', image: githubImg },
            { name: 'Git', image: gitImg },
            { name: 'npm', image: npmImg },
            { name: 'Vercel', image: vercelImg },
            { name: 'VSCode', image: vscodeImg },
        ],
    },
    {
        title: 'Specialties',
        list: [
            { name: 'Responsive Design' },
            { name: 'Pixel-perfect design' },
            { name: 'Accessibility' },
            { name: 'Design-thinking' },
            { name: 'Agile/Scrum' },
            { name: 'Product Management' },
        ],
    },
];

export {};
