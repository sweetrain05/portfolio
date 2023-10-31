import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import { navList, extLinkList } from '../common/AppConstants';
import './Footer.scss';

const Footer: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className='footer'>
            <div className='footer__container'>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/');
                    }}
                >
                    <img src={logo} alt='logo' />
                </button>
                <nav>
                    <ul className='footer__nav-list'>
                        {navList.map((li) => (
                            <li key={li.name}>
                                <button
                                    className='footer__nav-list__btn'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigate(li.link);
                                    }}
                                >
                                    {li.name.toUpperCase()}
                                </button>
                            </li>
                        ))}
                        <li>
                            <button
                                className='footer__nav-list__btn'
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate('/contact');
                                }}
                            >
                                {'Contact'.toUpperCase()}
                            </button>
                        </li>
                    </ul>
                </nav>
                <ul className='footer__ext-link-list'>
                    {extLinkList.map((li) => (
                        <li key={li.link}>
                            <a
                                href={li.link}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <button className='footer__ext-link-list__btn-icons'>
                                    <li.icon className='footer__ext-link-list__btn-icons__icon' />
                                </button>
                            </a>
                        </li>
                    ))}
                </ul>
                <h3>© 2023 DAN BI CHOI</h3>
            </div>
        </div>
    );
};

export default Footer;
