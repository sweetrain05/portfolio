import { ValidationError, useForm } from '@formspree/react';
import {
    BsEnvelopeFill,
    BsFillChatLeftTextFill,
    BsPencilFill,
    BsPersonFill,
} from 'react-icons/bs';
import { contactLinks, tabletWidth } from '../../common/AppConstants';
import TextInput, { TextInputType } from '../../common/ui/TextInput';
import FormSubmissionSuccess from '../sections/FormSubmissionSuccess';
import ContactLink, { contactDataType } from '../cards/ContactLink';
import profileIMG from '../../assets/images/profile.png';
import useScrollToTop from '../../hooks/useScrollToTop';
import useWindowWidth from '../../hooks/useWindowWidth';
import './Contact.scss';

const Contact: React.FC = () => {
    useScrollToTop();
    const windowWidth = useWindowWidth();

    const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_KEY);

    if (state.succeeded) {
        return <FormSubmissionSuccess />;
    }

    return (
        <>
            <section className='contact'>
                <div className='contact__my-info'>
                    <div className='contact__img-container'>
                        <img
                            className='contact__img-container__img'
                            src={profileIMG}
                            alt='profile'
                        />
                    </div>
                    <div className='contact__links-container'>
                        {contactLinks.map((li: contactDataType) => (
                            <ContactLink key={li.title} data={li} />
                        ))}
                    </div>
                </div>

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
                            autoFocus={windowWidth > tabletWidth}
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
                            className='contact__form__input-container__btn'
                        >
                            <span className='btn'>
                                {state.submitting ? 'Sending...' : 'Send'}
                            </span>
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;
