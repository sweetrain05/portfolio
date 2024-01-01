import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import profileIMG from '../../assets/images/profile.png';
import HighlightCard from '../cards/HighlightCard';
import { highlightWorks, mobileWidth } from '../../common/AppConstants';
import useWindowWidth from '../../hooks/useWindowWidth';
import './Home.scss';

const Home: React.FC = () => {
    const windowWidth = useWindowWidth();

    return (
        <section className='home'>
            <section className='home__about-me'>
                <div className='home__about-me__title'>
                    <h1 className='home__about-me__title__text section-title'>
                        Hello, I’m Danbi.
                    </h1>
                    <h1 className='home__about-me__title__icon'>👋</h1>
                </div>

                <div className='home__about-me__p'>
                    <h3>
                        Full-stack Developer
                        {windowWidth > mobileWidth ? (
                            <>
                                {' '}
                                <span>|</span>{' '}
                            </>
                        ) : (
                            <>
                                <br />
                                <span>&</span>{' '}
                            </>
                        )}
                        Front-end Developer
                    </h3>
                    <br />
                    Expertised in <span>
                        React.js, JavaScript, TypeScript
                    </span>{' '}
                    with experiences in <span>Node.js, MongoDB, MySQL</span>.{' '}
                    <br />
                    <br />
                    Besides web development, I’m passionate about funny cat
                    memes, trying out new recipes, and basically everything
                    related to creating something beautiful and yummy.
                </div>
                <div className='home__about-me__img-container'>
                    <img
                        src={profileIMG}
                        alt='profile'
                        className='home__about-me__img'
                    />
                </div>
            </section>

            <section className='home__highlight'>
                <h1 className='home__highlight__title'>Highlighted Works</h1>
                <div className='home__highlight__card-box'>
                    {highlightWorks.map((work) => (
                        <HighlightCard key={work.title} data={work} />
                    ))}
                </div>
                <Link to='/experiences'>
                    <button className='home__highlight__btn btn'>
                        SEE ALL WORKS{' '}
                        <MdKeyboardDoubleArrowRight className='home__highlight__btn__icon' />
                    </button>
                </Link>
            </section>

            <section className='home__contact-banner'>
                <h1 className='home__contact-banner__title'>
                    LET’S WORK TOGETHER!
                </h1>
                <p className='home__contact-banner__text'>
                    Looking for a full-stack developer with front-end expertise?
                </p>{' '}
                <Link to='/contact'>
                    <button className='home__contact-banner__btn btn'>
                        LET'S TALK!
                    </button>
                </Link>
            </section>
        </section>
    );
};

export default Home;
