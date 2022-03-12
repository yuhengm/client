import React from "react";
import Navigation from "./Navigation";
import FeatureInput from "./FeatureInput";
import HubInput from "./HubInput";

function SideBar() {
	return (
		<div className="sideBar">
			{/* Navigation bar */}
			<Navigation />

			<div className="inputFields">

				{/* User input: forecast features */}
				<FeatureInput />

				{/* User input: number of hubs */}
				<HubInput />
			</div>
		</div>
	);
}

export default SideBar;
