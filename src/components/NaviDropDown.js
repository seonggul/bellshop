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
				<span>공지사항</span>
			</li>
			<li>
				<span>QnA</span>
			</li>
			<li>
				<span>Review</span>
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
	font-family: "Roboto";
	position: absolute;
	margin-top: 200px;
	z-index: 998;
	display: block;
	height: 150px;
	width: 100%;
	background-color: white;
	ul {
		padding-left: 0px;
		list-style: none;
		li {
			padding-top: 5px;
		}
	}
`;
