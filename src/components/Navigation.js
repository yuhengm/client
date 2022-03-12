import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Navigation() {
	return (
		<div className="navigation">
			{/* Navigation bar */}
			<Navbar collapseOnSelect expand="lg" bg="light">
				<Container>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Navbar.Brand>
								United Way Greater Vancouver
							</Navbar.Brand>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default Navigation;
