import { Link } from 'react-router-dom';
import './HighlightCard.scss';

type OwnProps = {
    data: highlightDataType;
};

type highlightDataType = {
    title: string;
    subtitle: string;
    description: string;
    link: linkDataType[];
};

export type linkDataType = {
    icon: any;
    to: string;
    linkTitle: string;
};

const HighlightCard: React.FC<OwnProps> = ({ data }) => {
    const { title, subtitle, description, link } = data;

    return (
        <article className='home__highlight__card'>
            <a href={link[0].to} className='home__highlight__card__title__link'>
                <div className='home__highlight__card__color-circle'>
                    <div className='home__highlight__card__color-circle__inner'></div>
                </div>

                <h1 className='home__highlight__card__title'>{title}</h1>

                <h2 className='home__highlight__card__subtitle'>{subtitle}</h2>
                <p className='home__highlight__card__description'>
                    {description}
                </p>
            </a>
            <div className='home__highlight__card__icons'>
                <div className='home__highlight__card__icons__container'>
                    {link.map((li) => (
                        <a
                            key={li.to}
                            href={li.to}
                            target={
                                li.linkTitle === 'experience page'
                                    ? '_self'
                                    : '_blank'
                            }
                            rel='noopener noreferrer'
                            aria-label={`Open new tab link to ${title}'s ${li.linkTitle}`}
                            className='home__highlight__card__icons__icon-box'
                        >
                            <li.icon className='home__highlight__card__icons__icon' />
                        </a>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default HighlightCard;
