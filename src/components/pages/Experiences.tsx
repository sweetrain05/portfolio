import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
    experiencesCardData,
    projectsCardData,
} from '../../common/AppConstants';
import ExperienceCard, { experienceDataType } from '../cards/ExperienceCard';
import ResumeDownload from '../sections/ResumeDownload';
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

            <ResumeDownload />

            <section>
                {experiencesCardData.map((exp: experienceDataType) => (
                    <ExperienceCard key={exp.title} data={exp} />
                ))}
            </section>

            <h1 className='experiences__projects__title section-title'>
                Projects
            </h1>

            <section>
                {projectsCardData.map((proj: experienceDataType) => (
                    <ExperienceCard data={proj} key={proj.title} />
                ))}
            </section>
        </section>
    );
};

export default Experiences;
