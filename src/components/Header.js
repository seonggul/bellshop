import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
	faSearch,
	faShoppingCart,
	faBars,
	faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DropDown from "./NaviDropDown";
import logo from "../img/logo_transparent.svg";

const Header = ({ modalBox, setModalBox }) => {
	const [drop, setDrop] = useState(false);
	const linkstyle = {
		color: "black",
		textDecoration: "none",
	};
	return (
		<Container>
			<Auth>
				<Link to="/auth" style={linkstyle}>
					<span
						style={{
							color: "black",
						}}
					>
						회원가입
					</span>
				</Link>
				<EmptyLine>
					<Link to="/auth" style={linkstyle}>
						<span>로그인</span>
					</Link>
				</EmptyLine>
				<span>
					고객센터
					<FontAwesomeIcon icon={faCaretDown} />
				</span>
			</Auth>

			<MainLogo>
				<Link to="/Home" style={linkstyle}>
					<img
						src={logo}
						style={{
							width: "180px",
							height: "120px",
						}}
						alt="logo"
					/>
				</Link>
			</MainLogo>
			<div>
				<Navi>
					<NaviUl>
						<Item>
							<FontAwesomeIcon icon={faBars} />
							<span>전체 카테고리</span>
						</Item>
						<Item>
							<Link to="/shop" style={linkstyle}>
								Shop
							</Link>
						</Item>
						<Item>
							<Link to="/community" style={linkstyle}>
								Community
							</Link>
						</Item>
						<Item>
							<SearchContainer>
								<FontAwesomeIcon
									icon={faSearch}
									onClick={() => setModalBox(true)}
								/>
							</SearchContainer>
						</Item>
						<Item>
							<Link to="/cart" style={linkstyle}>
								<FontAwesomeIcon icon={faShoppingCart} />
							</Link>
						</Item>
					</NaviUl>
				</Navi>
			</div>

			{/* <DropDown drop={drop} /> */}
		</Container>
	);
};

export default Header;

const Container = styled.div`
	position: absolute;
	margin-top: 0px;
	display: flex;
	width: 87%;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	z-index: 998;
`;

const MainLogo = styled.div``;

const Navi = styled.div`
	width: 85vw;
	font-size: 20px;
	font-family: "Big Shoulders Stencil Display";
	background-color: "#607D8B";
`;

const NaviUl = styled.ul`
	list-style: none;
	padding-left: 0px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const Auth = styled.div`
	display: flex;
	width: 100vw;
	justify-content: flex-end;
	font-size: 10px;
	padding-top: 3px;
	padding-right: 20px;
`;

const SearchContainer = styled.div`
	:hover {
		cursor: pointer;
	}
`;

const Item = styled.li`
	position: relative;
	display: inline-block;
	:hover {
	}
`;

const EmptyLine = styled.div`
	::before {
		padding-left: 3px;
		padding-right: 3px;
		content: "|";
	}
	::after {
		padding-left: 3px;
		padding-right: 3px;
		content: "|";
	}
`;
