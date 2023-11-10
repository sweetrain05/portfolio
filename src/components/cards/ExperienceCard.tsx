import { Link } from 'react-router-dom';
import { BsFillBoxFill, BsFillCheckSquareFill } from 'react-icons/bs';
import { linkDataType } from './HighlightCard';
import './ExperienceCard.scss';

type OwnProps = {
    data: experienceDataType;
};

type experienceDataType = {
    jobTitle?: string;
    title: string;
    subtitle: string;
    description?: string;
    link?: linkDataType[];
    frontend?: string[];
    backend?: string[];
    explanation: string[];
};

const ExperienceCard: React.FC<OwnProps> = ({ data }) => {
    const {
        jobTitle = '',
        title,
        subtitle,
        description = '',
        link = [],
        frontend = [],
        backend = [],
        explanation,
    } = data;

    return (
        <article className='experience-card'>
            {jobTitle && (
                <h1 className='experience-card__jobTitle'>{jobTitle}</h1>
            )}
            <div className='experience-card__top-container'>
                <div className='experience-card__top-container__img-box'>
                    <img
                        src=''
                        alt=''
                        className='experience-card__top-container__img'
                    />
                </div>
                <h3 className='experience-card__top-container__title'>
                    {title}
                </h3>
                <h5 className='experience-card__top-container__subtitle'>
                    {subtitle}
                </h5>
                <p className='experience-card__top-container__description'>
                    {description}
                </p>
                {link.length > 0 && (
                    <ul className='experience-card__top-container__link-box'>
                        {link.map((li) => (
                            <Link
                                to={li.to}
                                className='experience-card__top-container__link'
                            >
                                <li key={li.icon}>
                                    <button>
                                        <li.icon className='experience-card__top-container__link__icon' />
                                    </button>
                                </li>
                            </Link>
                        ))}
                    </ul>
                )}
            </div>
            <div className='experience-card__bottom-container'>
                {frontend.length > 0 && (
                    <div className='experience-card__bottom-container__skill'>
                        <div className='experience-card__bottom-container__skill__title'>
                            <BsFillBoxFill className='experience-card__bottom-container__skill__title__icon' />
                            Front-end
                        </div>
                        <ul className='experience-card__bottom-container__skill__list'>
                            {frontend.map((li) => (
                                <li className='experience-card__bottom-container__skill__li'>
                                    {li}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {backend.length > 0 && (
                    <div className='experience-card__bottom-container__skill'>
                        <div className='experience-card__bottom-container__skill__title'>
                            <BsFillBoxFill className='experience-card__bottom-container__skill__title__icon' />
                            Back-end
                        </div>
                        <ul className='experience-card__bottom-container__skill__list'>
                            {backend.map((li) => (
                                <li className='experience-card__bottom-container__skill__li'>
                                    {li}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className='experience-card__bottom-container__skill'>
                    <div className='experience-card__bottom-container__skill__title'>
                        <BsFillBoxFill className='experience-card__bottom-container__skill__title__icon' />
                        What I did
                    </div>
                    <ul className='experience-card__bottom-container__explanation'>
                        {explanation.map((li) => (
                            <li className='experience-card__bottom-container__explanation__li'>
                                {li}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </article>
    );
};

export default ExperienceCard;
