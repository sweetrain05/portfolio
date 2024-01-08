import { useState, useMemo, useEffect } from 'react';
import './IconButton.scss';

type OwnProps = {
    data: IconButtonDataType;
    title: string;
};

type IconButtonDataType = {
    icon: React.ElementType;
    to: string;
    linkTitle: string;
};

const IconButton: React.FC<OwnProps> = ({ data, title }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            setIsHovered(false);
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    const target = useMemo(() => {
        if (data.to && data.to[0] === '/') {
            return '_self';
        } else {
            return '_blank';
        }
    }, [data.to]);

    return (
        <a
            href={data.to}
            target={target}
            rel='noreferrer'
            aria-label={`Open ${
                target === '_blank' ? 'new tab' : 'link'
            } to ${title}'s ${data.linkTitle}`}
            className='icon-button'
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            onClick={() => setIsHovered(false)}
        >
            <data.icon className='icon-button__icon' />
            {isHovered && (
                <p className='icon-button__hovered-text'>
                    {data.linkTitle.toUpperCase()}
                </p>
            )}
        </a>
    );
};

export default IconButton;
