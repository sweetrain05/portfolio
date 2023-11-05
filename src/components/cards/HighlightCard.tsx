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
            <Link
                to={link[0].to}
                className='home__highlight__card__title__link'
            >
                <div className='home__highlight__card__color-circle'>
                    <div className='home__highlight__card__color-circle__inner'></div>
                </div>

                <h3 className='home__highlight__card__title'>{title}</h3>

                <h5 className='home__highlight__card__subtitle'>{subtitle}</h5>
                <p className='home__highlight__card__description'>
                    {description}
                </p>
            </Link>
            <div className='home__highlight__card__icons'>
                <ul className='home__highlight__card__icons__container'>
                    {link.map((li) => (
                        <a
                            href={li.to}
                            target={
                                li.linkTitle === 'experience page'
                                    ? '_self'
                                    : '_blank'
                            }
                            rel='noopener noreferrer'
                        >
                            <li
                                key={li.to}
                                className='home__highlight__card__icons__icon-box'
                            >
                                <li.icon className='home__highlight__card__icons__icon' />
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
        </article>
    );
};

export default HighlightCard;
