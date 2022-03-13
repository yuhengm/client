import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Navigation from "./Navigation";
import FeatureInput from "./FeatureInput";
import HubInput from "./HubInput";

function SideBar({ coordHandler }) {
	// display options
	const [flag, setFlag] = useState(true);
	const handleChange = (e) => {
		setFlag(!flag);
	};

	const baseURL = "http://localhost:5000/";

	// manage submissions
	const submitHandler = (newData) => {
		console.log(newData);
		let newURL = "";

		// city + hub number
		if (flag) {
			newURL =
				baseURL +
				"hub_number/" +
				newData.city.toLowerCase() +
				"/" +
				newData.hubNum;
		} else {
			newURL =
				baseURL +
				"feature_forecast/" +
				newData.city.toLowerCase() +
				"/" +
				newData.population +
				"/" +
				newData.unemployment;
		}
		// get request with information
		fetch(newURL)
			.then((res) => res.json())
			.then((json) => {
				coordHandler(json);
			});
	};

	return (
		<div className="sideBar">
			{/* Navigation bar */}
			<Navigation />

			<Form>
				<div className="options">
					<Form.Check
						inline
						label="Forecast Features"
						type="radio"
						value="feature"
						checked={!flag}
						onChange={handleChange}
					/>
					<Form.Check
						inline
						label="Hub Number"
						type="radio"
						value="hub-number"
						checked={flag}
						onChange={handleChange}
					/>
				</div>
			</Form>

			<div className="inputFields">
				{flag ? (
					<HubInput submitHandler={submitHandler} />
				) : (
					<FeatureInput submitHandler={submitHandler} />
				)}
			</div>
		</div>
	);
}

export default SideBar;
