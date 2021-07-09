import React from "react";
import SearchForm from "../components/SearchForm";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ linkstyle }) => {
	return (
		<Container>
			<Category>
				<FontAwesomeIcon
					icon={faBars}
					style={{ fontSize: "19px", marginRight: "5px" }}
				/>
				<span>전체 카테고리</span>
			</Category>
			<Navi>
				<Link to="/new" style={linkstyle}>
					신상품
				</Link>
				<Link to="/ranking" style={linkstyle}>
					랭킹
				</Link>
				<Link to="/hotdeal" style={linkstyle}>
					이달의 특가
				</Link>
				<Link to="/event" style={linkstyle}>
					이벤트
				</Link>

				<InputBox style={{ display: "flex", flexDirection: "row" }}>
					<SearchForm />

					<Link to="/cart" style={linkstyle}>
						<FontAwesomeIcon icon={faShoppingCart} />
					</Link>
				</InputBox>
			</Navi>
		</Container>
	);
};

export default Navigation;

const Container = styled.div`
	width: 950px;
	height: 50px;
	font-size: 20px;
	font-family: "Noto Sans KR";
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Category = styled.div`
	position: fixed;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 180px;
	height: 50px;
	:hover {
		cursor: pointer;
		background-color: black;
		color: white;
	}
`;

const Navi = styled.div`
	margin-left: 200px;
	display: flex;
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	a {
		:hover {
			color: #fdcb6e;
			border-bottom: 2px solid #fdcb6e;
		}
	}
`;

const Menu = styled.li`
	position: relative;
	display: flex;
	justify-content: space-around;
	width: auto;
`;
const InputBox = styled.div`
	position: relative;
	display: inline-block;
	right: 0px;
	:hover {
		cursor: pointer;
	}
`;
