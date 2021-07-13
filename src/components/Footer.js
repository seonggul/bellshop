import React from "react";
import styled from "styled-components";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
	const githubClick = () => {
		window.location.href = "https://github.com/seonggul/bellshop";
	};
	return (
		<Container>
			<Line></Line>
			<Content>
				<span style={{ marginBottom: "5px" }}>개발자</span>
				<span style={{ color: "#aaa69d", marginBottom: "15px" }}>강 성 걸</span>
				<span style={{ marginBottom: "5px" }}>문의 및 개선사항</span>
				<span style={{ color: "#aaa69d", marginBottom: "15px" }}>
					gul930429@gmail.com
				</span>
				<FontAwesomeIcon
					icon={faGithub}
					size="2x"
					onClick={githubClick}
					style={{ cursor: "pointer" }}
				/>
			</Content>
		</Container>
	);
};

export default Footer;

const Container = styled.div`
	background-color: #f7f7f7;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

const Line = styled.div`
	height: 1px;
	width: 90vw;
	background-color: rgb(234, 234, 234);
	border-radius: 2px;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #71747b;
	margin-top: 20px;
	margin-bottom: 30px;
`;
