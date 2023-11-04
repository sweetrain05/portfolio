import {
    BsLinkedin,
    BsGithub,
    BsFillEnvelopeFill,
    BsFileEarmarkTextFill,
    BsBoxArrowUpRight,
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
            { icon: BsFileEarmarkTextFill, to: '/experiences' },
            {
                icon: BsGithub,
                to: 'https://github.com/sweetrain05/witness-creative-react',
            },
            {
                icon: BsBoxArrowUpRight,
                to: 'https://react-webiste-witness-creative-inc.vercel.app/',
            },
        ],
    },
    {
        title: 'Web App',
        subtitle: 'Weather and News by Zip Code',
        description:
            'A web app enabling users to search for local weather and related news articles by entering their zip code.',
        link: [
            { icon: BsFileEarmarkTextFill, to: '/experiences' },
            {
                icon: BsGithub,
                to: 'https://github.com/sweetrain05/zipcode-search',
            },
            {
                icon: BsBoxArrowUpRight,
                to: 'https://zipcode-search-one.vercel.app/',
            },
        ],
    },
];

export {};
