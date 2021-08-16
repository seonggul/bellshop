import React, { useState } from "react";
import styled from "styled-components";
import chicken from "../img/ico_chicken.png";
import lunchbox from "../img/ico_lunchbox.png";
import meat from "../img/ico_meat.png";
import drink from "../img/ico_drink.png";
import fish from "../img/ico_fish.png";
import hmr from "../img/ico_hmr.png";

const DropDown = ({ hover }) => {
	const [itemNum, setItemNum] = useState(0);
	const bigSection = [
		{
			id: 1,
			name: "닭가슴살",
			img: chicken,
			alt: "chicken",
		},
		{
			id: 2,
			name: "소 돼지",
			img: meat,
			alt: "meat",
		},
		{
			id: 3,
			name: "도시락",
			img: lunchbox,
			alt: "chicken",
		},
		{
			id: 4,
			name: "즉석 간편식",
			img: hmr,
			alt: "hmr",
		},
		{
			id: 5,
			name: "음료 프로틴",
			img: drink,
			alt: "drink",
		},
		{
			id: 6,
			name: "수산 해산",
			img: fish,
			alt: "fish",
		},
	];
	const smallsection = [
		["전체", "스테이크", "스팀", "슬라이스", "훈제", "저염"],
		["전체", "소고기", "돼지고기", "닭안심"],
		["전체", "다이어트 도시락", "간편 도시락", "볶음밥"],
		["전체", "핫도그", "만두", "카레 짜장"],
		["전체", "우유 두유", "물 탄산수", "프로틴 음료", "과일 건강즙"],
		["전체", "생선구이", "연어 참치", "오징어", "어묵"],
	];

	const smallList =
		smallsection[itemNum] &&
		smallsection[itemNum].map((a, index) => {
			return (
				<SmallItem>
					<span>{a}</span>
				</SmallItem>
			);
		});
	const bigList = bigSection.map((a, index) => {
		return (
			<BigItem
				key={index}
				id={index}
				onMouseEnter={async (event) => {
					await setItemNum(event.target.id);
				}}
			>
				<img
					src={a.img}
					alt="new"
					style={{ marginLeft: "5px", marginRight: "5px" }}
				/>
				<span>{a.name}</span>
			</BigItem>
		);
	});

	return (
		<Container hover={hover}>
			<BigDrop>{bigList}</BigDrop>
			<SmallSection hover={hover}>
				<SmallDrop>{smallList}</SmallDrop>
			</SmallSection>
		</Container>
	);
};

export default DropDown;

const Container = styled.div`
	position: absolute;
	top: 70px;
	display: ${(props) => (props.hover ? "inline-flex" : "none")};
	color: black;
	font-family: "Roboto";
	z-index: 998;
	height: 240px;
	width: 168px;
	background-color: white;
	border: 1px solid #e8e8e8;
	border-radius: 0 0 0 5px;
`;

const BigDrop = styled.ul`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-around;
	margin-top: 5px;
	margin-bottom: 5px;
	padding-left: 0px;
`;

const BigItem = styled.li`
	display: flex;
	width: 100%;
	flex-direction: row;
	align-items: center;
	height: 45px;
	font-size: 16px;
	:hover {
		background-color: #e8e8e8;
	}
`;

const SmallSection = styled.div`
	background-color: #e8e8e8;
	left: 168px;
	margin-top: -1px;
	position: absolute;
	display: ${(props) => (props.hover ? "flex" : "none")};
	width: 145px;
	height: 240px;
	font-family: "Roboto";
	border: 1px solid #e8e8e8;
	border-radius: 0 0 5px 0;
`;

const SmallDrop = styled.ul`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: flex-start;
	list-style: none;
	margin-top: 5px;
	margin-bottom: 5px;
	padding-left: 15px;
	font-size: 16px;
`;

const SmallItem = styled.li`
	display: flex;
	width: 167px;
	flex-direction: row;
	align-items: center;
	width: 100%;
	height: 47px;
	:hover {
		color: #ff542a;
		span {
			border-bottom: 1px solid #ff542a;
		}
	}
`;
