import IconButton from '../../common/ui/IconButton';
import './HighlightCard.scss';

type OwnProps = {
    data: highlightDataType;
};

export type highlightDataType = {
    title: string;
    subtitle: string;
    description: string;
    link: linkDataType[];
    image: string;
};

export type linkDataType = {
    icon: any;
    to: string;
    linkTitle: string;
};

const HighlightCard: React.FC<OwnProps> = ({ data }) => {
    const { title, subtitle, description, link, image } = data;

    return (
        <article className='home__highlight__card'>
            <div className='home__highlight__card__link'>
                <a href={link[0].to}>
                    <div className='home__highlight__card__img-box'>
                        <img
                            src={image}
                            alt={title}
                            className='home__highlight__card__img-box__img'
                        />
                    </div>
                </a>

                <div className='home__highlight__card__desc'>
                    <h1 className='home__highlight__card__title'>{title}</h1>

                    <h2 className='home__highlight__card__subtitle'>
                        {subtitle}
                    </h2>
                    <p className='home__highlight__card__description'>
                        {description}
                    </p>
                </div>
            </div>

            <div className='home__highlight__card__icons'>
                <div className='home__highlight__card__icons__container'>
                    {link.map((li) => (
                        <IconButton
                            key={li.linkTitle}
                            data={li}
                            title={title}
                        />
                    ))}
                </div>
            </div>
        </article>
    );
};

export default HighlightCard;
