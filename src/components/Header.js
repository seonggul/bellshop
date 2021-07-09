import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
	faShoppingCart,
	faBars,
	faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DropDown from "./NaviDropDown";
import logo from "../img/logo_transparent.svg";

import Navigation from "./Navigation";

const Header = ({ modalBox, setModalBox }) => {
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
							width: "200px",
							height: "140px",
						}}
						alt="logo"
					/>
				</Link>
			</MainLogo>
			<Navigation linkstyle={linkstyle} />

			{/* <DropDown drop={drop} /> */}
		</Container>
	);
};

export default Header;

const Container = styled.div`
	position: absolute;
	margin-top: 0px;
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	z-index: 998;
`;

const Auth = styled.div`
	display: flex;
	width: 85vw;
	justify-content: flex-end;
	font-size: 15px;
	padding-top: 3px;
	padding-bottom: 5px;
`;

const MainLogo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80vw;
	::before {
		content: "";
		width: 100vw;
		border-bottom: 1px solid #eaeaea;
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
