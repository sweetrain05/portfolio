import { MdFileDownload } from 'react-icons/md';
import ExperienceCard from '../cards/ExperienceCard';
import { experiencesCardData } from '../../common/AppConstants';
import './Experiences.scss';

const Experiences: React.FC = () => {
    return (
        <section className='experiences'>
            <h1 className='experiences__title section-title'>Experiences</h1>
            <section className='experiences__resume'>
                <p className='experiences__resume__text'>
                    My formal resume is available here.
                </p>
                <button className='experiences__resume__btn btn'>
                    <MdFileDownload />
                    DOWNLOAD
                </button>
            </section>
            <section className='experiences__exp'>
                {experiencesCardData.map((exp) => (
                    <ExperienceCard data={exp} key={exp.title} />
                ))}
            </section>
            <section className='experiences__projects'></section>
        </section>
    );
};

export default Experiences;
