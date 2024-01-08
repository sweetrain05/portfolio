import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import LandingView from '../sections/LandingView';
import HighlightCard, { highlightDataType } from '../cards/HighlightCard';
import { highlightWorks } from '../../common/AppConstants';
import useScrollToTop from '../../hooks/useScrollToTop';
import './Home.scss';

const Home: React.FC = () => {
    useScrollToTop();

    return (
        <section className='home'>
            <LandingView />

            <section className='home__highlight'>
                <h1 className='home__highlight__title'>Highlighted Works</h1>
                <div className='home__highlight__card-box'>
                    {highlightWorks.map((work: highlightDataType) => (
                        <HighlightCard key={work.title} data={work} />
                    ))}
                </div>

                <Link to='/experiences' className='home__highlight__btn'>
                    <span className='btn'>
                        SEE ALL WORKS{' '}
                        <MdKeyboardDoubleArrowRight className='home__highlight__btn__icon' />
                    </span>
                </Link>
            </section>

            <section className='home__contact-banner'>
                <h1 className='home__contact-banner__title'>
                    LET’S WORK TOGETHER!
                </h1>
                <p className='home__contact-banner__text'>
                    Looking for a full-stack developer with front-end expertise?
                </p>
                <Link to='/contact' className='home__contact-banner__btn'>
                    <span className='btn'>LET'S TALK!</span>
                </Link>
            </section>
        </section>
    );
};

export default Home;
