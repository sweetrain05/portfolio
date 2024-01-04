import { skillList } from '../../common/AppConstants';
import useScrollToTop from '../../hooks/useScrollToTop';
import './Skills.scss';

const Skills: React.FC = () => {
    useScrollToTop();
    return (
        <section className='skills'>
            <h1 className='skills__title section-title'>Skills</h1>
            {skillList.map(({ title, list }) => (
                <div key={title}>
                    <h3 className='skills__subtitle'>{title.toUpperCase()}</h3>
                    <div className='skills__skills-container'>
                        {title === 'Specialties' ? (
                            <>
                                {list.map((li) => (
                                    <div key={li.name}>
                                        <div className='skills__skills-container__img-box'>
                                            <p className='skills__skills-container__img-box__text'>
                                                {li.name}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <>
                                {list.map(({ name, image }) => (
                                    <div key={name}>
                                        <div className='skills__skills-container__img-box'>
                                            <img
                                                src={image}
                                                alt={name}
                                                className='skills__skills-container__img-box__img'
                                            />
                                        </div>
                                        <p className='skills__skills-container__name'>
                                            {name}
                                        </p>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Skills;
