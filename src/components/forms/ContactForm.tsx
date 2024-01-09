import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    BsEnvelopeFill,
    BsFillChatLeftTextFill,
    BsPencilFill,
    BsPersonFill,
} from 'react-icons/bs';
import { MdError } from 'react-icons/md';
import TextInput, { TextInputType } from '../../common/ui/TextInput';
import { ValidationType } from '../../hooks/useInputValidate';
import useInput from '../../hooks/useInput';
import './ContactForm.scss';

const ContactForm: React.FC = () => {
    const navigate = useNavigate();

    const [isPending, setIsPending] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const {
        value: nameValue,
        handleInputChange: handleNameChange,
        handleInputBlur: handleNameBlur,
        handleReset: handleNameReset,
        hasError: nameHasError,
        error: nameErrorMessage,
    } = useInput('', ValidationType.NAME);

    const {
        value: emailValue,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        handleReset: handleEmailReset,
        hasError: emailHasError,
        error: emailErrorMessage,
    } = useInput('', ValidationType.EMAIL);

    const {
        value: subjectValue,
        handleInputChange: handleSubjectChange,
        handleInputBlur: handleSubjectBlur,
        handleReset: handleSubjectReset,
        hasError: subjectHasError,
        error: subjectErrorMessage,
    } = useInput('', ValidationType.SUBJECT);

    const {
        value: messageValue,
        handleInputChange: handleMessageChange,
        handleInputBlur: handleMessageBlur,
        handleReset: handleMessageReset,
        hasError: messageHasError,
        error: messageErrorMessage,
    } = useInput('', ValidationType.MESSAGE);

    const handleReset = () => {
        handleNameReset();
        handleEmailReset();
        handleSubjectReset();
        handleMessageReset();
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsPending(true);
        setError('');

        if (
            nameHasError ||
            emailHasError ||
            subjectHasError ||
            messageHasError
        ) {
            setIsPending(false);
            return;
        }

        const formData = new FormData();
        formData.append('Full Name', nameValue);
        formData.append('Email', emailValue);
        formData.append('Subject', subjectValue);
        formData.append('Message', messageValue);

        try {
            const response = await fetch(
                `https://formspree.io/f/${process.env.REACT_APP_FORMSPREE_KEY}`,
                {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json',
                    },
                }
            );

            if (response.ok) {
                handleReset();
                navigate('/contact?source=form-success');
            } else {
                response.json().then((data) => {
                    if (Object.hasOwn(data, 'errors')) {
                        setError(
                            data['errors']
                                .map((error) => error['message'])
                                .join(', ')
                        );
                    } else {
                        setError(
                            'Oops! There was a problem submitting your form. Please try again.'
                        );
                    }
                });
            }
        } catch (error) {
            setError(
                'Oops! There was a problem submitting your form. Please try again.'
            );
        } finally {
            setIsPending(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='contact__form__input-container'
        >
            <TextInput
                type={TextInputType.TEXT}
                label='Full Name'
                icon={BsPersonFill}
                placeholder='Your name'
                onBlur={handleNameBlur}
                onChange={handleNameChange}
                value={nameValue}
                errorText={nameHasError && nameErrorMessage}
                disabled={isPending}
            />

            <TextInput
                type={TextInputType.TEXT}
                label='Email'
                icon={BsEnvelopeFill}
                placeholder='Your email'
                onBlur={handleEmailBlur}
                onChange={handleEmailChange}
                value={emailValue}
                errorText={emailHasError && emailErrorMessage}
                disabled={isPending}
            />

            <TextInput
                type={TextInputType.TEXT}
                label='Subject'
                icon={BsPencilFill}
                placeholder='What is this about?'
                onBlur={handleSubjectBlur}
                onChange={handleSubjectChange}
                value={subjectValue}
                errorText={subjectHasError && subjectErrorMessage}
                disabled={isPending}
            />

            <TextInput
                type={TextInputType.TEXTAREA}
                label='Message'
                icon={BsFillChatLeftTextFill}
                placeholder='Your message here...'
                onBlur={handleMessageBlur}
                onChange={handleMessageChange}
                value={messageValue}
                errorText={messageHasError && messageErrorMessage}
                disabled={isPending}
            />

            {error && (
                <p className='contact__form__input-container__error'>
                    <MdError />
                    {error}
                </p>
            )}

            <button
                type='submit'
                disabled={isPending}
                className='contact__form__input-container__btn'
            >
                <span className='btn'>{isPending ? 'Sending...' : 'Send'}</span>
            </button>
        </form>
    );
};

export default ContactForm;
