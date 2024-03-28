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
                        {/* Front-end Developer
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
                        )} */}
                        Product Marketing Manager
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
                    With <span>5 years of experience </span>as a Product
                    Marketing Manager and programming knowledge, I excel in
                    bridging technical solutions with business strategies,
                    focusing on optimal user experiences from initial concept to
                    launch.
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
