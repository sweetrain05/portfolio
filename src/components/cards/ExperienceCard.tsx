import { useMemo } from 'react';
import { BsFillBoxFill } from 'react-icons/bs';
import { linkDataType } from './HighlightCard';
import IconButton from '../../common/ui/IconButton';
import Tag from '../../common/ui/Tag';
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

    const demoLink = useMemo(() => {
        if (link.length > 2) return link[2].to;
        else if (link.length > 1) return link[1].to;
        else if (link.length === 0) return null;
    }, [link]);

    const linkProps = useMemo(() => {
        if (!demoLink) {
            return {};
        } else {
            return {
                href: demoLink,
                target: '_blank',
                rel: 'noreferrer',
            };
        }
    }, [demoLink]);

    return (
        <article className='experience-card' id={title.replace(/\s+/g, '')}>
            {jobTitle && (
                <h1 className='experience-card__jobTitle'>{jobTitle}</h1>
            )}
            <div className='experience-card__top-container'>
                <Tag as={demoLink ? 'a' : 'div'} {...linkProps}>
                    <div className='experience-card__top-container__img-box'>
                        <img
                            src={image}
                            alt={title}
                            className='experience-card__top-container__img'
                        />
                    </div>
                </Tag>
                <div className='experience-card__top-container__desc-box'>
                    <Tag as={demoLink ? 'a' : 'div'} {...linkProps}>
                        <h1 className='experience-card__top-container__title'>
                            {title}
                        </h1>
                    </Tag>
                    <h1 className='experience-card__top-container__subtitle'>
                        {subtitle}
                    </h1>
                    <p className='experience-card__top-container__description'>
                        {description}
                    </p>
                    {link.length > 0 && (
                        <div className='experience-card__top-container__link-box'>
                            {link.map((li) => (
                                <IconButton
                                    key={li.linkTitle}
                                    data={li}
                                    title={title}
                                />
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
