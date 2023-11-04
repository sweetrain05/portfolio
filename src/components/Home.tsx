import profileIMG from '../assets/images/profile.png';
import HighlightCard from './cards/HighlightCard';
import { highlightWorks } from '../common/AppConstants';
import './Home.scss';

const Home: React.FC = () => {
    return (
        <section className='home'>
            <section className='home__about-me'>
                <div className='home__about-me__title'>
                    <h1 className='home__about-me__title__text'>
                        Hello, I’m Danbi.
                    </h1>
                    <h1 className='home__about-me__title__icon'>👋</h1>
                </div>

                <div className='home__about-me__p'>
                    <h3>
                        Full-stack Developer <span>|</span> Frontend Developer
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
            </section>
        </section>
    );
};

export default Home;
