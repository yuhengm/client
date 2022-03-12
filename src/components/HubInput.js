import React from "react";
import { Form } from "react-bootstrap";
import CityInput from "./CityInput";
import Navigation from "./Navigation";
import NumberInput from "./NumberInput";

function HubInput() {
	return (
		<div className="hubInput">
			<Form>
				<CityInput />
				<br />
				<NumberInput title="Hubs" />
			</Form>
		</div>
	);
}

export default HubInput;
