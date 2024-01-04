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
                >
                    <img src={logo} alt='logo' className='footer__logo' />
                </button>
                <nav>
                    <ul className='footer__nav-list'>
                        {navList.map((li) => (
                            <li key={li.title}>
                                <button
                                    className='footer__nav-list__btn'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigate(li.to);
                                    }}
                                >
                                    {li.title.toUpperCase()}
                                </button>
                            </li>
                        ))}
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
                <h3>© 2023 Created by DANBI CHOI</h3>
            </div>
        </div>
    );
};

export default Footer;
