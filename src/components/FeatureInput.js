import React from "react";
import { Form } from "react-bootstrap";
import NumberInput from "./NumberInput";

function TextInput() {
	return (
		<div className="textInput">
			<Form>
				<NumberInput title="p1" />
				<NumberInput title="p2" />
				<NumberInput title="p3" />
				<NumberInput title="p4" />
			</Form>
		</div>
	);
}

export default TextInput;
