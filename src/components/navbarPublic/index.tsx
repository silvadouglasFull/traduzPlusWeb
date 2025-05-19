import { LinksHeader } from "@components/navbarPublic/links";
import { LogLink } from '@components/navbarPublic/logLink';
import { logo } from "@flavor/index";
import { links } from "@utils/linksHeader";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { LanguageDropdown } from "./languageDropdown";
import './styles.css';
export const Header: React.FC = () => {
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-sm-only">
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

