import { useMemo } from 'react';
import Tag from '../../common/ui/Tag';
import './ContactLink.scss';

type OwnProps = {
    data: contactDataType;
};

type contactDataType = {
    icon: React.ElementType;
    title: string;
    link?: string;
};

const ContactLink: React.FC<OwnProps> = ({ data }) => {
    const linkProps = useMemo(() => {
        if (!data.link) return { className: 'contact-link' };
        else
            return {
                href: data.link,
                target: '_blank',
                rel: 'noreferrer noopener',
                className: 'contact-link',
            };
    }, [data.link]);

    return (
        <Tag as={data.link ? 'a' : 'div'} {...linkProps}>
            <data.icon className='contact-link__icon' />
            <h1 className='contact-link__description'>{data.title}</h1>
        </Tag>
    );
};

export default ContactLink;
