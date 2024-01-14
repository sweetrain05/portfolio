import { Link } from 'react-router-dom';
import { BiSolidError } from 'react-icons/bi';
import './PageNotFound.scss';

const PageNotFound: React.FC = () => {
    return (
        <section className='page-not-found'>
            <BiSolidError className='page-not-found__icon' />
            <h1>Opps...</h1>
            <h1>We can’t find the page you’re looking for.</h1>
            <Link to={'/'} className='page-not-found__btn'>
                <span className='btn'>Go Home ⇀</span>
            </Link>
        </section>
    );
};

export default PageNotFound;
