import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import { navList } from '../common/AppConstants';
import './Header.scss';

const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className='header'>
            <div className='header__container'>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/');
                    }}
                >
                    <img src={logo} alt='logo' />
                </button>
                <nav>
                    <ul className='header__nav-list'>
                        {navList.map((li) => (
                            <li key={li.name}>
                                <button
                                    className='header__nav-list__btn'
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
                                className='header__nav-list__btn-highlight'
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate('/contact');
                                }}
                            >
                                {`Let's talk`.toUpperCase()}
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
