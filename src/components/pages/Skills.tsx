import { skillList } from '../../common/AppConstants';
import './Skills.scss';

const Skills: React.FC = () => {
    return (
        <section className='skills'>
            <h1 className='skills__title section-title'>Skills</h1>
            {skillList.map(({ title, list }) => (
                <div key={title}>
                    <h3 className='skills__subtitle'>{title}</h3>
                    <div className='skills__skills-container'>
                        {list.map(({ name, image }) => (
                            <div key={name}>
                                <div className='skills__skills-container__img-box'>
                                    <img src={image} alt={name} />
                                </div>
                                <p>{name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Skills;
