import React from "react";
import { Form, Button } from "react-bootstrap";
import CityInput from "./CityInput";
import NumberInput from "./NumberInput";

function HubInput() {
	return (
		<div className="hubInput">
			<Form>
				<CityInput />
				<br />
				<NumberInput title="Number of hubs" />
			</Form>
			<div className="btn">
				<Button type="submit" variant="dark">
					Submit
				</Button>
			</div>
		</div>
	);
}

export default HubInput;
