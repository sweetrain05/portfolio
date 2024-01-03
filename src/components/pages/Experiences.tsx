import { MdFileDownload } from 'react-icons/md';
import ExperienceCard from '../cards/ExperienceCard';
import {
    experiencesCardData,
    projectsCardData,
} from '../../common/AppConstants';
import './Experiences.scss';
import { Link } from 'react-router-dom';

const Experiences: React.FC = () => {
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
                            DOWNLOAD
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
