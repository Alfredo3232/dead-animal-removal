import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";

const Header = () => (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container className="d-flex flex-row min-vw-100">
            <Navbar.Brand href="/">
                <Image
                    alt="Dead Animal Removal"
                    src="react.svg"
                    width="30"
                    height="30"
                    rounded
                />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#Q&A">Q&A</Nav.Link>
                    <Nav.Link href="#Somewhere">Somewhere</Nav.Link>

                    <NavDropdown title="Quick Settings" className="pe-1 me-4 position-absolute top-1 end-0">
                        <NavDropdown.Item href="#action/3.1">
                            Dark Mode
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Login
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Header;
