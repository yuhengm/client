import React from 'react'
import { Form, Col, Row } from 'react-bootstrap';

function NumberInput({title}) {
  return (
		<div>
			<Form.Group as={Row} className="mb-3" controlId="formPlaintext">
				<Form.Label column sm="6">
					{title}
				</Form.Label>
				<Col sm="6">
					<Form.Control type="text" placeholder="Input number" />
				</Col>
			</Form.Group>
		</div>
  );
}

export default NumberInput