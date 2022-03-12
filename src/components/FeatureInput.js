import React from "react";
import { Form } from "react-bootstrap";
import CityInput from "./CityInput";
import NumberInput from "./NumberInput";

function FeatureInput() {
	return (
		<div className="featureInput">
			<Form>
				<CityInput />
				<br />
				<NumberInput title="p1" />
				<NumberInput title="p2" />
				<NumberInput title="p3" />
				<NumberInput title="p4" />
			</Form>
		</div>
	);
}

export default FeatureInput;
