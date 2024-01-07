import useWindowWidth from '../../hooks/useWindowWidth';
import { mobileWidth, tabletWidth } from '../../common/AppConstants';
import profileIMG from '../../assets/images/profile.png';
import './LandingView.scss';

const LandingView: React.FC = () => {
    const windowWidth = useWindowWidth();

    return (
        <section className='home__about-me'>
            <div>
                <div className='home__about-me__title'>
                    <h1 className='home__about-me__title__text section-title'>
                        Hello, I’m Danbi.
                    </h1>
                    <h1 className='home__about-me__title__icon'>👋</h1>
                </div>

                <div className='home__about-me__p'>
                    <h2>
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
                    </h2>
                    <br />
                    Expertised in <span>
                        React.js, JavaScript, TypeScript
                    </span>{' '}
                    with experiences in <span>Node.js, MongoDB, MySQL</span>.{' '}
                    <br />
                    I specialize in creating visually appealing, user-friendly
                    accessible interfaces.
                    <br />
                    <br />
                    Besides web development, I’m passionate about funny cat
                    memes, trying out new recipes, and basically everything
                    related to creating something beautiful and yummy.
                </div>
            </div>

            {windowWidth > tabletWidth && (
                <div className='home__about-me__img-container'>
                    <img
                        src={profileIMG}
                        alt='profile'
                        className='home__about-me__img'
                    />
                </div>
            )}
        </section>
    );
};
export default LandingView;
