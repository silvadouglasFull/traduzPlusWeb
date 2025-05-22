import { useNavbarBackground } from "@components/navbarPublic/hooks/useNavbarBackground";
import { LanguageDropdown } from "@components/navbarPublic/languageDropdown";
import { LinksHeader } from "@components/navbarPublic/links";
import { LogLink } from '@components/navbarPublic/logLink';
import '@components/navbarPublic/styles.css';
import { logo } from "@flavor/index";
import { links } from "@utils/linksHeader";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
export const Header: React.FC = () => {
    const { hasBackground } = useNavbarBackground()
    return (
        <Navbar collapseOnSelect expand="lg" className={`fixed-top ${hasBackground ? 'bg-light' : 'bg-transparent'}`}>
            <Container fluid>
                <Navbar.Brand as={Link} to={'#'}>
                    <LogLink urlLogo={logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <LinksHeader items={links} />
                    </Nav>
                    <Nav>
                        <LanguageDropdown />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

