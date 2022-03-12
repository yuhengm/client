import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import CityInput from "./CityInput";
import NumberInput from "./NumberInput";

function FeatureInput({ submitHandler }) {
	// City
	const [city, setCity] = useState("");
	const cityHandler = (cityName) => {
		setCity(cityName);
	};

	// Other inputs
	const [popNum, setPopNumber] = useState(0);
	const popHandler = (num) => {
		setPopNumber(num);
	};
	const [unempNum, setUnempNumber] = useState(0);
	const unempHandler = (num) => {
		setUnempNumber(num);
	};

	return (
		<div className="featureInput">
			<Form>
				<CityInput cityHandler={cityHandler} />
				<br />
				<NumberInput
					title="Population over 60"
					numberHandler={popHandler}
				/>
				<NumberInput title="Unemployed" numberHandler={unempHandler} />
			</Form>
			<div className="btn">
				<Button type="submit" variant="dark" onClick={() => submitHandler({city: city, population: popNum, unemployment: unempNum})}>
					Submit
				</Button>
			</div>
		</div>
	);
}

export default FeatureInput;
