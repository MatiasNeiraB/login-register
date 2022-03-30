import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap"

const NavbarComp = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Panel Docentes</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"/>
                    <Nav>
                        <NavDropdown title="Mi Perfil" id="collasible-nav-dropdown" collapseOnSelect expand="lg" bg="dark" variant="dark">
                            <NavDropdown.Item href="#action/3.1">Editar Perfil</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Privacidad</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Configuracion</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Cerrar Sesión</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComp