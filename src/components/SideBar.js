import React from "react";
import { Form } from "react-bootstrap";
import CityInput from "./CityInput";
import Navigation from "./Navigation";
import FeatureInput from "./FeatureInput";
import NumberInput from "./NumberInput";

function SideBar() {
	return (
		<div className="sideBar">
			{/* Navigation bar */}
			<Navigation />

			<div className="inputFields">

				{/* User input: forecast features */}
				<Form>
					<CityInput />
					<br />
					<NumberInput title="p1" />
					<NumberInput title="p2" />
					<NumberInput title="p3" />
					<NumberInput title="p4" />
				</Form>

				{/* User input: number of hubs */}
				<Form>
					<CityInput />
					<br />
					<NumberInput title="Hubs" />
				</Form>
			</div>
		</div>
	);
}

export default SideBar;
