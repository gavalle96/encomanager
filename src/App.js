// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Routes,
	Route, Link } from "react-router-dom";


import EncomiendasList from "./components/encomiendas/encomiendas-list";

// App Component
const App = () => {
return (
	<Router>
	<div className="App">
		<header className="App-header">
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>
				<Link to={"/"}
				className="nav-link">
				EncoManager
				</Link>
			</Navbar.Brand>

			<Nav className="justify-content-end">
				<Nav>
				<Link to={"/create-student"}
					className="nav-link">
					Create Student
				</Link>
				</Nav>

				<Nav>
				<Link to={"/student-list"}
					className="nav-link">
					Student List
				</Link>
				</Nav>
			</Nav>
			</Container>
		</Navbar>
		</header>

		<Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
				<Routes>
				<Route path="/"
					element={<EncomiendasList/>} />
				{/* <Route path="/create-student"
					component={CreateStudent} />
				<Route path="/edit-encomienda/:id"
					component={EditEncomienda} />
				<Route path="/student-list"
					component={StudentList} /> */}
				</Routes>
			</div>
			</Col>
		</Row>
		</Container>
	</div>
	</Router>
);
};

export default App;
