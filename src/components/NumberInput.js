import React from 'react'
import { Form, Col, Row } from 'react-bootstrap';

function NumberInput({title}) {
  return (
		<div>
			<Form.Group as={Row} className="mb-3" controlId="formPlaintext">
				<Form.Label column sm="2">
					{title}
				</Form.Label>
				<Col sm="10">
					<Form.Control type="text" placeholder="Input number" />
				</Col>
			</Form.Group>
		</div>
  );
}

export default NumberInput