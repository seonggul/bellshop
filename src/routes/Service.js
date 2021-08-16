import React from "react";
import styled from "styled-components";
import sorry from "../img/sorry.png";

const Service = () => {
	return (
		<Container>
			<img src={sorry} />
			<h1>[ 서비스 준비중입니다 ]</h1>
		</Container>
	);
};

export default Service;

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 600px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
