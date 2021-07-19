import React from "react";
import styled from "styled-components";

const DropDown = () => {
	return (
		<Container>
			<ul>
				<li>
					<span>신상품</span>
				</li>
				<li>
					<span>닭가슴살</span>
				</li>
				<li>
					<span>간편식</span>
				</li>
				<li>
					<span>음료 프로틴</span>
				</li>
				<li>
					<span>수산 해산</span>
				</li>
			</ul>
		</Container>
	);
};

export default DropDown;

const Container = styled.div`
	position: absolute;
	margin-top: 250px;
	display: none;
	color: black;
	font-family: "Roboto";
	z-index: 998;
	height: 200px;
	width: 100%;
	background-color: white;
	border: 1px solid #000000;
	border-radius: 5px;
	ul {
		padding-left: 0px;
		list-style: none;
		li {
			:hover {
				background-color: #a4b0be;
			}
		}
	}
`;
