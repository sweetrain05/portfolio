import { skillList } from '../../common/AppConstants';
import useScrollToTop from '../../hooks/useScrollToTop';
import SkillCard, { SkillCardDataType } from '../cards/SkillCard';
import './Skills.scss';

const Skills: React.FC = () => {
    useScrollToTop();
    return (
        <section className='skills'>
            <h1 className='skills__title section-title'>Skills</h1>

            {skillList.map(({ title, list }) => (
                <div key={title}>
                    <h1 className='skills__subtitle'>{title.toUpperCase()}</h1>
                    <div className='skills__skills-container'>
                        {list.map((li: SkillCardDataType) => (
                            <SkillCard key={li.name} data={li} />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Skills;
