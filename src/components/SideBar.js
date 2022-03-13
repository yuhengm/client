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

	// manage submissions
	const submitHandler = (newData) => {
		console.log(newData);
		// post request with JSON
		// obtain response
		// coordHandler
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
