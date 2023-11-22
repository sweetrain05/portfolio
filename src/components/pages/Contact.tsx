import {
    BsEnvelopeFill,
    BsFillChatLeftTextFill,
    BsPencilFill,
    BsPersonFill,
} from 'react-icons/bs';
import { contactLinks } from '../../common/AppConstants';
import TextInput, { TextInputType } from '../../common/TextInput';
import './Contact.scss';

const Contact: React.FC = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
    };
    return (
        <>
            <section className='contact'>
                <div className='contact__img-container'>
                    <img
                        className='contact__img-container__img'
                        src='https://catastic.pet/wp-content/uploads/2023/04/cute-white-british-cat-wearing-sunglasses-yellow-fabric-hammock-isolated-yellow-background-1.jpg'
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
                <div className='contact__form'>
                    <h1 className='contact__form__title section-title'>
                        Contact
                    </h1>
                    <p className='contact__form__subtitle'>
                        Want to chat about my works?
                    </p>
                    <form
                        onSubmit={handleFormSubmit}
                        className='contact__form__input-container'
                    >
                        <TextInput
                            type={TextInputType.TEXT}
                            label='Full Name'
                            icon={BsPersonFill}
                            placeholder='Your name'
                        />
                        <TextInput
                            type={TextInputType.EMAIL}
                            label='Email'
                            icon={BsEnvelopeFill}
                            placeholder='Your email'
                        />
                        <TextInput
                            type={TextInputType.TEXT}
                            label='Subject'
                            icon={BsPencilFill}
                            placeholder='What is this about?'
                        />
                        <TextInput
                            type={TextInputType.TEXTAREA}
                            label='Message'
                            icon={BsFillChatLeftTextFill}
                            placeholder='Your message here...'
                        />
                        <button className='contact__form__input-container__btn btn'>
                            Send
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;
