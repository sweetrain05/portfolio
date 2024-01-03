import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import logo from '../../assets/images/logo.svg';
import { tabletWidth, navList } from '../AppConstants';
import useWindowWidth from '../../hooks/useWindowWidth';
import './Header.scss';

const Header: React.FC = () => {
    const navigate = useNavigate();
    const windowWidth = useWindowWidth();
    const navOverlayRef = useRef(null);

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleNavClick = (page: string) => {
        switch (page) {
            case 'home':
                navigate('/');
                break;
            case 'experiences':
                navigate('/experiences');
                break;
            case 'skills':
                navigate('/skills');
                break;
            case 'contact':
                navigate('/contact');
                break;
            default:
                break;
        }
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const isDescendant = (curr, node) => {
            if (node === curr) return true;
            if (!node || !node.childNodes || !node.childNodes.length)
                return false;
            return Array.from(node.childNodes).some((n) =>
                isDescendant(curr, n)
            );
        };

        const handleClickOutside = (e: MouseEvent) => {
            if (
                navOverlayRef.current &&
                !isDescendant(e.target, navOverlayRef.current)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className='header'>
            <div className='header__container'>
                <button
                    onClick={() => handleNavClick('home')}
                    className='header__btn'
                >
                    <img src={logo} alt='logo' className='header__logo' />
                </button>
                <nav className='header__nav'>
                    {windowWidth < tabletWidth && (
                        <>
                            <button
                                className='header__nav-btn btn'
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setIsMenuOpen((curr) => !curr);
                                }}
                            >
                                <p className='header__nav-btn__text'>Menu</p>
                                <MdKeyboardArrowDown
                                    className={
                                        isMenuOpen
                                            ? 'header__nav-btn__arrow header__nav-btn__arrow--up'
                                            : 'header__nav-btn__arrow'
                                    }
                                />
                            </button>
                            {isMenuOpen && (
                                <ul
                                    className='header__nav-overlay'
                                    ref={navOverlayRef}
                                >
                                    {navList.map((li) => (
                                        <li key={li.title}>
                                            <button
                                                className='header__nav-overlay__li'
                                                onClick={() =>
                                                    handleNavClick(li.title)
                                                }
                                            >
                                                {li.title.toUpperCase()}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </>
                    )}

                    {windowWidth > tabletWidth && (
                        <ul className='header__nav-list'>
                            {navList.slice(0, -1).map((li) => (
                                <li key={li.title}>
                                    <button
                                        className='header__nav-list__btn'
                                        onClick={() => handleNavClick(li.title)}
                                    >
                                        {li.title.toUpperCase()}
                                    </button>
                                </li>
                            ))}
                            <li>
                                <button
                                    onClick={() => handleNavClick('contact')}
                                    className='header__nav-list__btn-highlight'
                                >
                                    <span className='btn'>
                                        {`Let's talk`.toUpperCase()}
                                    </span>
                                </button>
                            </li>
                        </ul>
                    )}
                </nav>
            </div>
        </div>
    );
};

export default Header;
