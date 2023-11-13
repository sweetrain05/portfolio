import { contactLinks } from '../../common/AppConstants';

import './Contact.scss';

const Contact: React.FC = () => {
    return (
        <>
            <section className='contact'>
                <div className='contact__img-container'>
                    <img
                        className='contact__img-container__img'
                        src='https://images.unsplash.com/photo-1603477849227-705c424d1d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJvcGljYWwlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D'
                        alt='profile'
                    />
                </div>
                <ul className='contact__links-container'>
                    {contactLinks.map((li) => (
                        <li key={li.title}>
                            <a
                                href={li.link}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <button className='contact__links-container__btn'>
                                    <li.icon className='contact__links-container__btn__icon' />
                                    <h1 className='contact__links-container__btn__description'>
                                        {li.title}
                                    </h1>
                                </button>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default Contact;
