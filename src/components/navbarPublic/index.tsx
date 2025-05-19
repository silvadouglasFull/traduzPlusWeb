import logo from "@assets/images/logo-inverse-246x44.png";
import { LinksHeader } from "@components/navbarPublic/links";
import { LogLink } from '@components/navbarPublic/logLink';
import { links } from "@utils/linksHeader";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LanguageDropdown } from "./languageDropdown";
export const Header: React.FC = () => {
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">
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

