import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import DropDown from "./NaviDropDown";
import logo from "../img/logo_transparent.svg";
import Navigation from "./Navigation";
import LoginModal from "./LoginModal";
import { authService } from "../fBase";

const Header = ({ userLogin, setUserLogin }) => {
	const [loginBox, setLoginBox] = useState(false);
	const [windowWidth, setWindowWidth] = useState();
	const loginRef = useRef(null);
	const [loginPosition, setLoginPosition] = useState(null);
	const linkstyle = {
		color: "black",
		textDecoration: "none",
	};
	const history = useHistory();
	const onLogOutClick = () => {
		setUserLogin(false);
		authService.signOut();
		history.push("/");
		window.alert("로그아웃하였습니다.");
	};
	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};
	useEffect(() => {
		if (userLogin === false) {
			window.addEventListener("resize", handleResize);
			setLoginPosition(loginRef.current.offsetLeft - 120);
			return () => {
				window.addEventListener("resize", handleResize);
			};
		}
	}, [windowWidth]);

	return (
		<Container>
			<Auth>
				{userLogin ? (
					<LogOutSpan onClick={onLogOutClick}>로그아웃</LogOutSpan>
				) : (
					<Link to="/join" style={linkstyle}>
						<span>회원가입</span>
					</Link>
				)}

				<EmptyLine>
					{userLogin ? (
						<Link to="/myinfo" style={linkstyle}>
							<span>정보 수정</span>
						</Link>
					) : (
						<a ref={loginRef} onClick={() => setLoginBox(!loginBox)}>
							로그인
						</a>
					)}
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

const LogOutSpan = styled.span`
	:hover {
		cursor: pointer;
	}
`;
