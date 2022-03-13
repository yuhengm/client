import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import CityInput from "./CityInput";
import NumberInput from "./NumberInput";

function HubInput({ submitHandler }) {
	// City
	const [city, setCity] = useState("");
	const cityHandler = (cityName) => {
		setCity(cityName);
	};

	// Other inputs
	const [hubNum, setHubNumber] = useState(0);
	const hubHandler = (num) => {
		setHubNumber(num);
	};

	return (
		<div className="hubInput">
			<Form>
				<CityInput cityHandler={cityHandler} />
				<br />
				<NumberInput
					title="Number of hubs"
					numberHandler={hubHandler}
				/>
			</Form>
			<div className="btn">
				<Button type="submit" variant="dark" onClick={() => submitHandler({ city: city, hubNum: hubNum })} >
					Submit
				</Button>
			</div>
		</div>
	);
}

export default HubInput;
