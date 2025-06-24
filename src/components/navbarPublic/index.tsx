import { useNavbarBackground } from "@components/navbarPublic/hooks/useNavbarBackground";
import { useNavBarExpanded } from "@components/navbarPublic/hooks/useNavBarExpanded";
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
    const { handleExpanded, isExpanded } = useNavBarExpanded()
    return (
        <Navbar expanded={isExpanded} collapseOnSelect expand="lg" className="fixed-top"
            style={(hasBackground || isExpanded) ? styles.bgDefault : styles.bgTransparent}>
            <Container>
                <Navbar.Brand as={Link} to={'/'}>
                    <LogLink urlLogo={logo} />
                </Navbar.Brand>
                <Navbar.Toggle onClick={handleExpanded} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="w-100 navbar-nav justify-content-between align-items-md-end">
                        <LinksHeader items={items} />
                        <LanguageDropdown />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

