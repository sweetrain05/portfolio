import {
    BsEnvelopeFill,
    BsFillChatLeftTextFill,
    BsPencilFill,
    BsPersonFill,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { ValidationError, useForm } from '@formspree/react';
import { contactLinks } from '../../common/AppConstants';
import TextInput, { TextInputType } from '../../common/TextInput';
import './Contact.scss';

const Contact: React.FC = () => {
    const [state, handleSubmit] = useForm('mdorkoqr');
    if (state.succeeded) {
        return (
            <div className='contact__form__input-container__after-form-submission'>
                <p>
                    Thank you for your interest! <br />I will get back to you
                    shortly.
                </p>
                <Link to={'/'}>
                    <button className='contact__form__input-container__after-form-submission__btn btn'>
                        Go Home ⇀
                    </button>
                </Link>
            </div>
        );
    }

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
                        onSubmit={handleSubmit}
                        className='contact__form__input-container'
                    >
                        <TextInput
                            type={TextInputType.TEXT}
                            label='Full Name'
                            icon={BsPersonFill}
                            placeholder='Your name'
                            required
                        />
                        <ValidationError
                            field='Full Name'
                            prefix='Full Name'
                            errors={state.errors}
                        />
                        <TextInput
                            type={TextInputType.EMAIL}
                            label='Email'
                            icon={BsEnvelopeFill}
                            placeholder='Your email'
                            required
                        />
                        <ValidationError
                            field='Email'
                            prefix='Email'
                            errors={state.errors}
                        />
                        <TextInput
                            type={TextInputType.TEXT}
                            label='Subject'
                            icon={BsPencilFill}
                            placeholder='What is this about?'
                            required
                        />
                        <ValidationError
                            field='Subject'
                            prefix='Subject'
                            errors={state.errors}
                        />
                        <TextInput
                            type={TextInputType.TEXTAREA}
                            label='Message'
                            icon={BsFillChatLeftTextFill}
                            placeholder='Your message here...'
                            required
                        />
                        <button
                            type='submit'
                            disabled={state.submitting}
                            className='contact__form__input-container__btn btn'
                        >
                            {state.submitting ? 'Sending...' : 'Send'}
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;
