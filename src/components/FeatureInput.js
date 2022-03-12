import React from "react";
import { Form, Button } from "react-bootstrap";
import CityInput from "./CityInput";
import NumberInput from "./NumberInput";

function FeatureInput() {
	return (
		<div className="featureInput">
			<Form>
				<CityInput />
				<br />
				<NumberInput title="Population over 60" />
				<NumberInput title="Unemployed" />
			</Form>
			<div className="btn">
				<Button type="submit" variant="dark">
					Submit
				</Button>
			</div>
		</div>
	);
}

export default FeatureInput;
