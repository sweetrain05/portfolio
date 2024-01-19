import { useMemo } from 'react';
import { linkDataType } from './HighlightCard';
import IconButton from '../../common/ui/IconButton';
import Tag from '../../common/ui/Tag';
import ExperienceList from './ExperienceList';
import './ExperienceCard.scss';

type OwnProps = {
    data: experienceDataType;
};

export type experienceDataType = {
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

    const createMarkup = (htmlContent: string) => {
        return { __html: htmlContent };
    };

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

                    <p
                        className='experience-card__top-container__description'
                        dangerouslySetInnerHTML={createMarkup(description)}
                    ></p>

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
                    <ExperienceList title='Front-end' data={frontend} />
                )}

                {backend.length > 0 && (
                    <ExperienceList title='Back-end' data={backend} />
                )}

                <ExperienceList title='What I did' data={explanation} />
            </div>
        </article>
    );
};

export default ExperienceCard;
