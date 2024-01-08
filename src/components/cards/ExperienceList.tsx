import { useMemo } from 'react';
import { BsFillBoxFill } from 'react-icons/bs';
import classNames from 'classnames';
import './ExperienceList.scss';

type OwnProps = {
    data: string[];
    title: string;
};

const ExperienceList: React.FC<OwnProps> = ({ data, title }) => {
    const ulStyleClasses = useMemo(
        () =>
            classNames(
                {
                    'experience-card__bottom-container__skill__list':
                        title !== 'What I did',
                },
                {
                    'experience-card__bottom-container__explanation':
                        title === 'What I did',
                }
            ),
        [title]
    );

    const liStyleClasses = useMemo(
        () =>
            classNames(
                {
                    'experience-card__bottom-container__skill__li':
                        title !== 'What I did',
                },
                {
                    'experience-card__bottom-container__explanation__li':
                        title === 'What I did',
                }
            ),
        [title]
    );

    return (
        <div className='experience-card__bottom-container__skill'>
            <div className='experience-card__bottom-container__skill__title'>
                <BsFillBoxFill className='experience-card__bottom-container__skill__title__icon' />
                {title}
            </div>
            <ul className={ulStyleClasses}>
                {data.map((li: string) => (
                    <li key={li} className={liStyleClasses}>
                        {li}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceList;
