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
				baseURL + "hub_number/" + newData.city.toLowerCase() + "/" + newData.hubNum;
		} else {
			newURL =
				baseURL + "hub_number/" +
				newData.city.toLowerCase() +
				"&population=" +
				newData.population +
				"&unemployment=" +
				newData.unempolyment;
		}
		// get request with information
		let coord = [];
		fetch(newURL).then(res => res.json()).then(json => {
			coordHandler(json);
		});
		// console.log(newURL);

		// const coords = [
		// 	[49.2262601, -123.1017867],
		// 	[49.198466, -122.84495],
		// 	[49.2033279, -122.9072924],
		// 	[49.17288, -123.14169],
		// ];

		// coordHandler()

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
