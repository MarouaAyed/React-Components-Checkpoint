import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

function Address() {
    return (
			<div>
				<Container className="containerAdress">
					<Row>
						<Col xs={6} md={4}>
							My adress : Moknine 5050
						</Col>
					</Row>
				</Container>
			</div>
		);
}

export default Address
