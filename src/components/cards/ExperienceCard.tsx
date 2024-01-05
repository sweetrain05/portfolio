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
    image?: string;
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
        image = '',
        description = '',
        link = [],
        frontend = [],
        backend = [],
        explanation,
    } = data;

    let demoLink: string;
    if (link.length > 2) demoLink = link[2].to;
    else if (link.length > 1) demoLink = link[1].to;

    return (
        <article className='experience-card' id={title.replace(/\s+/g, '')}>
            {jobTitle && (
                <h1 className='experience-card__jobTitle'>{jobTitle}</h1>
            )}
            <div className='experience-card__top-container'>
                {' '}
                <a href={demoLink} target='_blank' rel='noreferrer'>
                    <div className='experience-card__top-container__img-box'>
                        <img
                            src={image}
                            alt={title}
                            className='experience-card__top-container__img'
                        />
                    </div>
                </a>
                <div className='experience-card__top-container__desc-box'>
                    <a href={demoLink} target='_blank' rel='noreferrer'>
                        <h1 className='experience-card__top-container__title'>
                            {title}
                        </h1>
                    </a>
                    <h1 className='experience-card__top-container__subtitle'>
                        {subtitle}
                    </h1>
                    <p className='experience-card__top-container__description'>
                        {description}
                    </p>
                    {link.length > 0 && (
                        <div className='experience-card__top-container__link-box'>
                            {link.map((li) => (
                                <a
                                    key={li.icon}
                                    href={li.to}
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-label={`Open new tab link to ${title}'s ${li.linkTitle}`}
                                    className='experience-card__top-container__link'
                                >
                                    <li.icon className='experience-card__top-container__link__icon' />
                                </a>
                            ))}
                        </div>
                    )}
                </div>
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
                                <li
                                    key={li}
                                    className='experience-card__bottom-container__skill__li'
                                >
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
                                <li
                                    key={li}
                                    className='experience-card__bottom-container__skill__li'
                                >
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
                            <li
                                key={li}
                                className='experience-card__bottom-container__explanation__li'
                            >
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
