import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DropDown from "./NaviDropDown";
import logo from "../img/logo_transparent.svg";
import Navigation from "./Navigation";
import LoginModal from "./LoginModal";

const Header = () => {
	const [loginBox, setLoginBox] = useState(false);
	const [windowWidth, setWindowWidth] = useState();
	const loginRef = useRef(null);
	const [loginPosition, setLoginPosition] = useState(null);
	const linkstyle = {
		color: "black",
		textDecoration: "none",
	};
	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		setLoginPosition(loginRef.current.offsetLeft - 100);
		return () => {
			window.addEventListener("resize", handleResize);
		};
	}, [windowWidth]);

	return (
		<Container>
			<Auth>
				<Link to="/join" style={linkstyle}>
					<span
						style={{
							color: "black",
						}}
					>
						회원가입
					</span>
				</Link>
				<EmptyLine>
					<a ref={loginRef} onClick={() => setLoginBox(!loginBox)}>
						로그인
					</a>
				</EmptyLine>
				<Link to="/service" style={linkstyle}>
					고객센터
				</Link>
			</Auth>
			<LoginModal
				loginBox={loginBox}
				setLoginBox={setLoginBox}
				loginPosition={loginPosition}
			/>

			<MainLogo>
				<Link to="/" style={linkstyle}>
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
	a {
		:hover {
			cursor: pointer;
		}
	}
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
