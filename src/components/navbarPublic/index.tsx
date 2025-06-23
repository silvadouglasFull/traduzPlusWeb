import { useNavbarBackground } from "@components/navbarPublic/hooks/useNavbarBackground";
import { LanguageDropdown } from "@components/navbarPublic/languageDropdown";
import { LinksHeader } from "@components/navbarPublic/links";
import { LogLink } from '@components/navbarPublic/logLink';
import { styles } from "@components/navbarPublic/styles";
import '@components/navbarPublic/styles.css';
import { logo } from "@flavor/index";
import { useChangeLanguage } from "@hooks/useChangeLanguage/links";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
export const Header: React.FC = () => {
    const { hasBackground } = useNavbarBackground()
    const { items } = useChangeLanguage()
    return (
        <Navbar collapseOnSelect expand="lg" className="fixed-top bg-sm-only"
            style={hasBackground ? styles.bgDefault : styles.blurStyle}>
            <Container>
                <Navbar.Brand as={Link} to={'/'}>
                    <LogLink urlLogo={logo} width={'100%'} height={'100%'} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={`me-auto w-100 navbar-nav justify-content-between align-items-md-end ${!hasBackground ? 'mt-3' : ''}`}>
                        <LinksHeader items={items} />
                        <LanguageDropdown />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

