import { MainOter } from '@components/navbarPublic/mainOter';
import { useState } from 'react';
export const Header: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (

        <MainOter isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

    );
};
