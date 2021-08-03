import React, { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import DropDown from "./NaviDropDown";

const Navigation = ({ linkstyle, fixedHeader, setFixedHeader }) => {
	const [hover, setHover] = useState(false);

	const handleScroll = async () => {
		if (window.scrollY < 170) {
			await setFixedHeader(false);
		} else {
			await setFixedHeader(true);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.addEventListener("scroll", handleScroll);
	}, [fixedHeader]);

	return (
		<BigContainer fixedHeader={fixedHeader}>
			<Container>
				<Category
					onMouseEnter={(event) => {
						setHover(true);
					}}
					onMouseLeave={(event) => {
						setHover(false);
					}}
				>
					<span style={{ width: "170px" }}>
						<FontAwesomeIcon
							icon={faBars}
							style={{ fontSize: "19px", marginRight: "10px" }}
						/>
						<span>전체 카테고리</span>
					</span>
					<DropDown hover={hover} />
				</Category>
				<Navi>
					<NaviItem>
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
					</NaviItem>
					<InputBox style={{ display: "flex", flexDirection: "row" }}>
						<SearchForm />

						<Link to="/cart" style={linkstyle}>
							<FontAwesomeIcon icon={faShoppingCart} />
						</Link>
					</InputBox>
				</Navi>
			</Container>
		</BigContainer>
	);
};

export default Navigation;

const BigContainer = styled.div`
	z-index: 99;
	background-color: #ffffff;
	width: 100%;
	height: 70px;
	font-size: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: "Noto Sans KR";
	position: ${(props) => (props.fixedHeader ? "fixed" : "relavtive")};
	opacity: ${(props) => (props.fixedHeader ? "0.9" : "1")};
	border-bottom: 1px solid #eaeaea;
`;

const Container = styled.div`
	width: 990px;
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Category = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	width: 180px;
	height: 70px;
	:hover {
		border-radius: 5px 5px 0px 0px;
		cursor: pointer;
		background-color: black;
		color: white;
	}
	svg {
		padding-left: 15px;
	}
`;

const NaviItem = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	a {
		:hover {
			color: #fdcb6e;
			border-bottom: 2px solid #fdcb6e;
		}
	}
`;

const Navi = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const InputBox = styled.div`
	position: relative;
	display: inline-block;
	right: 0px;
	:hover {
		cursor: pointer;
	}
`;
