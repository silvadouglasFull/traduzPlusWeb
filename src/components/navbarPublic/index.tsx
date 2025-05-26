import { useNavbarBackground } from "@components/navbarPublic/hooks/useNavbarBackground";
import { LanguageDropdown } from "@components/navbarPublic/languageDropdown";
import { LinksHeader } from "@components/navbarPublic/links";
import { LogLink } from '@components/navbarPublic/logLink';
import { styles } from "@components/navbarPublic/styles";
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
        <Navbar collapseOnSelect expand="lg" className="fixed-top bg-sm-only"
            style={hasBackground ? styles.bgDefault : styles.bgTransparent}>
            <Container className="justify-conent-start justify-conent-md-center">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand as={Link} to={'#'} className="d-block d-md-none">
                    <LogLink urlLogo={logo} />
                </Navbar.Brand>
                <Navbar.Brand as={Link} to={'#'} className="d-md-block d-none mr-5">
                    <LogLink urlLogo={logo} width={'100%'} />
                </Navbar.Brand>
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

