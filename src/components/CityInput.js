import React from "react";
import { Form } from "react-bootstrap";

function CityInput() {
	return (
		<div className="cityInput">
			<Form.Select aria-label="Default select example">
				<option>Select a city to begin</option>
				<option value="Vancouver">Vancouver</option>
				<option value="Surrey">Surrey</option>
				<option value="New Westminster">New Westminster</option>
				<option value="Richmond">Richmond</option>
				<option value="Coquitlam">Coquitlam</option>
				<option value="Delta">Delta</option>
				<option value="Victoria">Victoria</option>
				<option value="Abbotsford">Abbotsford</option>
				<option value="Kamloops">Kamloops</option>
				<option value="Burnaby">Burnaby</option>
			</Form.Select>
		</div>
	);
}

export default CityInput;
