import { MainOter } from '@navbarPublic/MainOter';
import { useState } from 'react';
import './styles.css';
/**
 * Render a Navbar.
 * @returns {JSX.Element}
 */
export const Header: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="section page-header">
            <div className="rd-navbar-wrap rd-nav-bar">
                <nav
                    className="rd-navbar rd-navbar-minimal rd-navbar-minimal-wide rd-navbar-original rd-navbar-static"
                    data-layout="rd-navbar-fixed"
                    data-sm-layout="rd-navbar-fixed"
                    data-md-layout="rd-navbar-fixed"
                    data-md-device-layout="rd-navbar-fixed"
                    data-lg-layout="rd-navbar-fixed"
                    data-lg-device-layout="rd-navbar-fixed"
                    data-xl-layout="rd-navbar-static"
                    data-xl-device-layout="rd-navbar-fixed"
                    data-xxl-layout="rd-navbar-static"
                    data-xxl-device-layout="rd-navbar-static"
                    data-lg-stick-up-offset="46px"
                    data-xl-stick-up-offset="46px"
                    data-xxl-stick-up-offset="46px"
                    data-lg-stick-up="true"
                    data-xl-stick-up="true"
                    data-xxl-stick-up="true"
                >
                    <MainOter isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
                </nav>
            </div>
        </header>
    );
};
