import React from "react";
import { Form } from "react-bootstrap";

function CityInput({cityHandler}) {
	return (
		<div className="cityInput">
			<Form.Group controlId="formBasicSelect">
				<Form.Label>Select a city to begin</Form.Label>
				<Form.Control
					as="select"
					// value={city}
					onChange={(e) => {
						cityHandler(e.target.value);
					}}
				>
					<option>Select a city to begin</option>
					<option value="Vancouver">Vancouver</option>
					<option value="Surrey">Surrey</option>
					<option value="New Westminster">New Westminster</option>
					<option value="Richmond">Richmond</option>
					<option value="Coquitlam">Coquitlam</option>
					<option value="Delta">Delta</option>
					<option value="Victoria">Victoria</option>
					<option value="Abbotsford">Abbotsford</option>
				</Form.Control>
			</Form.Group>
		</div>
	);
}

export default CityInput;
