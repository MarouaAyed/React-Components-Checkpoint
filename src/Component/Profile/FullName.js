import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

function FullName() {
    return (
			<div>
				<Container className="containerFullName">
					<Row>
						<Col xs={6} md={4}>
                            My name is Maroua Ayed
						</Col>
					</Row>
				</Container>
			</div>
		);
}

export default FullName

