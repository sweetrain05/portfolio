import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { navList, extLinkList } from '../AppConstants';
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
                    className='footer__btn'
                    aria-label='Go to main page'
                >
                    <img src={logo} alt='logo' className='footer__logo' />
                </button>
                <nav>
                    <div className='footer__nav-list'>
                        {navList.map((li) => (
                            <button
                                key={li.title}
                                className='footer__nav-list__btn'
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate(li.to);
                                }}
                            >
                                {li.title.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </nav>
                <div className='footer__ext-link-list'>
                    {extLinkList.map((li) => (
                        <a
                            key={li.link}
                            href={li.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label={`Open new tab link to ${li.linkTitle}`}
                            className='footer__ext-link-list__btn-icons'
                        >
                            <li.icon className='footer__ext-link-list__btn-icons__icon' />
                        </a>
                    ))}
                </div>
                <h6>© 2023 Created by DANBI CHOI</h6>
            </div>
        </div>
    );
};

export default Footer;
