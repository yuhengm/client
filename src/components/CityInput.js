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
					<option value="vancouver">Vancouver</option>
					<option value="surrey">Surrey</option>
					<option value="new westminster">New Westminster</option>
					<option value="richmond">Richmond</option>
					<option value="coquitlam">Coquitlam</option>
					<option value="delta">Delta</option>
					<option value="victoria">Victoria</option>
					<option value="abbotsford">Abbotsford</option>
				</Form.Control>
			</Form.Group>
		</div>
	);
}

export default CityInput;
