import { useEffect } from 'react';
import { MdFileDownload } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import ExperienceCard from '../cards/ExperienceCard';
import {
    experiencesCardData,
    projectsCardData,
} from '../../common/AppConstants';
import useScrollToTop from '../../hooks/useScrollToTop';
import './Experiences.scss';

const Experiences: React.FC = () => {
    useScrollToTop();

    const location = useLocation();

    useEffect(() => {
        const elementId = location.hash.replace('#', '');
        if (elementId) {
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView();

                // Adjust for top margin
                const scrolledY = window.scrollY;
                if (scrolledY) {
                    window.scroll(0, scrolledY - 100);
                }
            }
        }
    }, [location]);

    return (
        <section className='experiences'>
            <h1 className='experiences__title section-title'>Experiences</h1>
            <section className='experiences__resume'>
                <p className='experiences__resume__text'>
                    My formal resume is available here.
                </p>
                <a
                    href='https://drive.google.com/file/d/1M8V2Wbt3zbAT3pKt3HYOGVQc66xj-A2y/view?usp=sharing'
                    target='_blank'
                    rel='noreferrer'
                >
                    <button className='experiences__resume__btn'>
                        <span className='btn'>
                            <MdFileDownload />
                            RESUME
                        </span>
                    </button>
                </a>
            </section>

            <section className='experiences__exp'>
                {experiencesCardData.map((exp) => (
                    <ExperienceCard data={exp} key={exp.title} />
                ))}
            </section>

            <h1 className='experiences__projects__title section-title'>
                Projects
            </h1>
            <section className='experiences__projects'>
                {projectsCardData.map((proj) => (
                    <ExperienceCard data={proj} key={proj.title} />
                ))}
            </section>
        </section>
    );
};

export default Experiences;
