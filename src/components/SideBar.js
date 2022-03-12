import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import CityInput from "./CityInput";
import Navigation from './Navigation';

function SideBar() {
	return (
		<div className="sideBar">
			{/* Navigation bar */}
			<Navigation />

			{/* User input: city */}
			<CityInput />

			{/* User input: forecast features */}
			<InputGroup>
				<InputGroup.Text>P1</InputGroup.Text>
				<FormControl as="textarea" aria-label="With textarea" />
			</InputGroup>

			{/* User input: number of hubs */}
		</div>
	);
}

export default SideBar;
