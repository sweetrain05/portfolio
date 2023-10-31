import logo from '../assets/images/logo.svg';

const Header: React.FC = () => {
    return (
        <div className='header'>
            <img src={logo} alt='logo' />
        </div>
    );
};

export default Header;
