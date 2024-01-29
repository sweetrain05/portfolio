import { useLocation } from 'react-router-dom';

type OwnProps = {
    title: string;
    theme?: string;
    handleNavClick: (title: string) => void;
};

const HeaderNavButtons: React.FC<OwnProps> = ({
    title,
    theme = 'nav-list',
    handleNavClick,
}) => {
    const location = useLocation();

    let btnClassName: string = '';
    if (
        location.pathname.slice(1) === title ||
        (location.pathname === '/' && title === 'home')
    )
        btnClassName = 'header__selected';

    return (
        <button
            key={title}
            className={`header__${theme}__btn ${btnClassName}`}
            onClick={() => handleNavClick(title)}
            data-cy={`header-btn-${title}`}
        >
            {title.toUpperCase()}
        </button>
    );
};

export default HeaderNavButtons;
