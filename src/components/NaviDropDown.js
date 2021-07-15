import React from "react";
import styled from "styled-components";

const ShopDropDown = () => {
	return (
		<>
			<li>
				덤벨
				<ul>
					<li>멜킨</li>
					<li>BESKO</li>
					<li>이고진</li>
					<li>핏분</li>
				</ul>
			</li>
			<li>
				바벨
				<ul>
					<li>CNK</li>
					<li>더스크랙</li>
					<li>시나브로</li>
				</ul>
			</li>
			<li>
				케틀벨
				<ul>
					<li>멜킨</li>

					<li>이고진</li>
					<li>바디엑스</li>
				</ul>
			</li>
			<li>
				보조용품
				<ul>
					<li>스트랩</li>
					<li>벨트</li>
					<li>장갑</li>
				</ul>
			</li>
		</>
	);
};

const CommunityDropDown = () => {
	return (
		<>
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
		</>
	);
};

const DropDown = ({ drop }) => {
	return (
		<Container>
			<ul>{drop ? ShopDropDown() : CommunityDropDown()}</ul>
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
