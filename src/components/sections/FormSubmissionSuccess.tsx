import { Link } from 'react-router-dom';
import './FormSubmissionSuccess.scss';

const FormSubmissionSuccess: React.FC = () => {
    return (
        <section className='form-submission-success'>
            <p>
                Thank you for your interest! <br />I will get back to you
                shortly.
            </p>
            <Link to={'/'} className='form-submission-success__btn'>
                <span className='btn'>Go Home ⇀</span>
            </Link>
        </section>
    );
};

export default FormSubmissionSuccess;
