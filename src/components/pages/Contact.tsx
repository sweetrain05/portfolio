import { useLocation } from 'react-router-dom';
import { contactLinks } from '../../common/AppConstants';
import ContactForm from '../forms/ContactForm';
import FormSubmissionSuccess from '../sections/FormSubmissionSuccess';
import ContactLink, { contactDataType } from '../cards/ContactLink';
import profileIMG from '../../assets/images/profile.png';
import useScrollToTop from '../../hooks/useScrollToTop';
import './Contact.scss';

const Contact: React.FC = () => {
    useScrollToTop();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const source = queryParams.get('source');

    return (
        <>
            {source === 'form-success' ? (
                <FormSubmissionSuccess />
            ) : (
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

                        <ContactForm />
                    </div>
                </section>
            )}
        </>
    );
};

export default Contact;
