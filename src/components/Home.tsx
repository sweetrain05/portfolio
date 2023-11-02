import './Home.scss';
import profileIMG from '../assets/images/profile.png';

const Home: React.FC = () => {
    return (
        <section className='home'>
            <div className='home__about-me'>
                <div className='home__about-me__title'>
                    <h1 className='home__about-me__title__text'>
                        Hello, I’m Danbi.
                    </h1>
                    <h1 className='home__about-me__title__icon'>👋</h1>
                </div>

                <p className='home__about-me__p'>
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
                </p>
                <div className='home__about-me__img-container'>
                    <img
                        src={profileIMG}
                        alt='profile'
                        className='home__about-me__img'
                    />
                </div>
            </div>
            <div className='home__highlight'>
                <h1>Highlighted Works</h1>
            </div>
        </section>
    );
};

export default Home;
