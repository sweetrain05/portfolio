import {
    BsLinkedin,
    BsGithub,
    BsFillEnvelopeFill,
    BsFileEarmarkTextFill,
    BsBoxArrowUpRight,
    BsPalette2,
    BsGeoAltFill,
} from 'react-icons/bs';

export const mobileWidth = 480;
export const tabletWidth = 767;
export const desktopWidth = 1024;

export const navList = ['home', 'experiences', 'skills', 'contact'];

export const extLinkList = [
    { icon: BsLinkedin, link: 'https://www.linkedin.com/in/danbi-choi/' },
    { icon: BsGithub, link: 'https://github.com/sweetrain05' },
    { icon: BsFillEnvelopeFill, link: 'mailto:sweetrain05@hotmail.com' },
];

export const highlightWorks = [
    {
        title: 'ECommerce Website',
        subtitle: 'YoungLeeHan Korean, U.S.',
        description:
            'A dynamic mobile-responsive website featuring 35+ pages including admin panel with multiple privilege levels.',
        link: [
            {
                icon: BsFileEarmarkTextFill,
                to: '/experiences',
                linkTitle: 'experience page',
            },
            {
                icon: BsGithub,
                to: 'https://github.com/YoungLeeHan/YoungleehanKorean',
                linkTitle: 'github',
            },
            {
                icon: BsBoxArrowUpRight,
                to: 'https://youngleehan-client-private.vercel.app/',
                linkTitle: 'demo',
            },
        ],
    },
    {
        title: 'Corporate Website',
        subtitle: 'Witness Creative Corp., U.S.',
        description:
            'A mobile-responsive website introducing the company and dynamically listing articles fetched from Medium blog using RESTful API.',
        link: [
            {
                icon: BsFileEarmarkTextFill,
                to: '/experiences',
                linkTitle: 'experience page',
            },
            {
                icon: BsGithub,
                to: 'https://github.com/sweetrain05/witness-creative-react',
                linkTitle: 'github',
            },
            {
                icon: BsBoxArrowUpRight,
                to: 'https://react-webiste-witness-creative-inc.vercel.app/',
                linkTitle: 'demo',
            },
        ],
    },
    {
        title: 'Web App',
        subtitle: 'Weather and News by Zip Code',
        description:
            'A web app enabling users to search for local weather and related news articles by entering their zip code.',
        link: [
            {
                icon: BsFileEarmarkTextFill,
                to: '/experiences',
                linkTitle: 'experience page',
            },
            {
                icon: BsGithub,
                to: 'https://github.com/sweetrain05/zipcode-search',
                linkTitle: 'github',
            },
            {
                icon: BsBoxArrowUpRight,
                to: 'https://zipcode-search-one.vercel.app/',
                linkTitle: 'demo',
            },
        ],
    },
];

export const experiencesCardData = [
    {
        jobTitle: 'Full-stack Developer',
        title: 'ECommerce Website',
        subtitle: 'YoungLeeHan Korean, U.S.',
        description:
            'Developed a dynamic e-commerce website featuring 35+page routes. The website offers K-culture blog and a platform for selling learning materials. It also provides an admin panel with multiple privilege levels, enabling efficient site administration.',
        link: [
            {
                icon: BsGithub,
                to: 'https://github.com/YoungLeeHan/YoungleehanKorean',
                linkTitle: 'github',
            },
            {
                icon: BsPalette2,
                to: 'https://www.figma.com/file/MIrWsyWmRhPKf4AkfpPIBR/YoungLeeHan-Korean-(Copy)?node-id=0%3A1&mode=dev',
                linkTitle: 'figma',
            },
            {
                icon: BsBoxArrowUpRight,
                to: 'https://youngleehan-client-private.vercel.app/',
                linkTitle: 'demo',
            },
        ],
        frontend: [
            'React',
            'Hooks',
            'Context',
            'HTML5',
            'SASS',
            'JavaScript ES6',
            'AJAX',
            'REST API',
            'Bootstrap',
            'Ant Design',
            'Figma',
        ],
        backend: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'Postman'],
        explanation: [
            'Architected and developed 30+ reusable react components collaborating with 4 other software engineers.',
            'Established seamless integration between the front-end and back-end utilizing REST APIs.',
            'Designed database schema, 6 API endpoints, and CRUD controllers.',
            'Practiced weekly sprint and successfully delivered the project within 8 weeks using Jira.',
        ],
    },
    {
        jobTitle: 'Front-end Developer',
        title: 'Corporate Website',
        subtitle: 'Witness Creative Corp., U.S.',
        description:
            'Built a mobile-responsive website introducing the company and dynamically listing articles fetched from blog.',
        link: [
            {
                icon: BsGithub,
                to: 'https://github.com/sweetrain05/witness-creative-react',
                linkTitle: 'github',
            },
            {
                icon: BsPalette2,
                to: 'https://www.figma.com/file/5kHQgvxup732yP5bTWsQpO/Witness-Corp.?mode=dev',
                linkTitle: 'figma',
            },
            {
                icon: BsBoxArrowUpRight,
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
        ],
        explanation: [
            'Developed through end-to-end lifecycle, from Figma design to deployment.',
            'Implemented HTTP requests using RapidAPI to retrieve user articles from their Medium blog.',
            'Integrated third-party components, including Mailchimp, Formspree and Google Domain.',
        ],
    },
    {
        jobTitle: 'Product Manager in Marketing',
        title: 'Project Management & Wireframing',
        subtitle: 'LG Hausys, Ltd., Seoul, South Korea | 2014 - 2018',
        explanation: [
            'Demonstrated strong project management skills by setting and executing specific bi-weekly action plans and facilitating smooth collaborations.',
            'Created wireframes for various marketing materials, such as product preview websites, sample books, brochures, and product application guides.',
        ],
    },
];

export const projectsCardData = [
    {
        title: 'Web App.',
        subtitle: 'Weather and News by Zip Code',
        description:
            'Built a site enabling users to search for local weather and related news articles by entering their zip code.',
        link: [
            {
                icon: BsGithub,
                to: 'https://github.com/sweetrain05/zipcode-search',
                linkTitle: 'github',
            },
            {
                icon: BsBoxArrowUpRight,
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
        ],
        explanation: [
            'Incorporated chaining HTTP requests to four different public APIs(Rapid APIs, NewsCatcher), utilizing user-entered zip code to extract location details, which was chained to fetch real-time information on weather, time of the day, and local news.',
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

export {};
