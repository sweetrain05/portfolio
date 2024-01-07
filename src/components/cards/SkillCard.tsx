import { useMemo } from 'react';
import './SkillCard.scss';

type OwnProps = {
    data: SkillCardDataType;
};

export type SkillCardDataType = {
    name: string;
    image?: any;
};

const SkillCard: React.FC<OwnProps> = ({ data }) => {
    const { name, image } = data;

    const insideBoxContent = useMemo(() => {
        if (!image)
            return (
                <p className='skills__skills-container__img-box__text'>
                    {name}
                </p>
            );
        else
            return (
                <img
                    src={image}
                    alt={name}
                    className='skills__skills-container__img-box__img'
                />
            );
    }, [name, image]);

    return (
        <div>
            <div className='skills__skills-container__img-box'>
                {insideBoxContent}
            </div>
            {image && <p className='skills__skills-container__name'>{name}</p>}
        </div>
    );
};

export default SkillCard;
