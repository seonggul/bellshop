/* import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DrawerRight = ({ hover, itemNumber, itemNum }) => {
	const smallsection = [
		["전체", "스테이크", "스팀", "슬라이스", "훈제", "저염"],
		["전체", "소고기", "돼지고기", "닭안심"],
		["전체", "다이어트 도시락", "간편 도시락", "볶음밥"],
		["전체", "핫도그", "만두", "카레 짜장"],
		["전체", "우유 두유", "물 탄산수", "프로틴 음료", "과일 건강즙"],
		["전체", "생선구이", "연어 참치", "오징어", "어묵"],
	];
	useEffect(() => {
		console.log(itemNum);
		console.log(smallsection[itemNum]);
	}, [itemNum]);
	let smallList = smallsection[1].map((a, index) => {
		<Item key={index}>{a}</Item>;
	});
	return (
		<Container hover={hover}>
			<ul>{smallList}</ul>
		</Container>
	);
};

export default DrawerRight;

const Container = styled.div`
	padding-left: 0px;
	padding-top: 0px;
	background-color: #e8e8e8;
	left: 167px;
	top: 0px;
	position: absolute;
	display: ${(props) => (props.hover ? "flex" : "none")};
	align-items: flex-start;
	width: 170px;
	height: 240px;
	font-family: "Roboto";
	border: 1px solid #e8e8e8;
	border-radius: 0 0 5px 5px;
`;
const Item = styled.li`
	:hover {
		color: #ffcb3c;
	}
`;
 */
