import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
function ProfilePhoto() {
	return (
		<div>
			<Container>
				<Row>
					<Col xs={6} md={4}>
						<Image src="maroua.jpg" className="image" rounded />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default ProfilePhoto;
