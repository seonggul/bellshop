import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const LoginModal = ({ loginBox, setLoginBox, loginPosition }) => {
	console.log(loginPosition);
	return (
		<ModalContainer loginBox={loginBox} loginPosition={loginPosition}>
			<LoginForm>
				<CloseBtn
					onClick={() => {
						return setLoginBox(false);
					}}
				>
					<FontAwesomeIcon icon={faTimes} />
				</CloseBtn>

				<h4>로그인</h4>

				<InputContainer>
					<InputItem>
						<Input type="text" placeholder="이메일을 입력하세요" />
						<Input type="password" placeholder="비밀번호" />
					</InputItem>
					<LoginButton>로그인</LoginButton>
				</InputContainer>

				<Link
					to="/join"
					style={{
						textDecoration: "none",
						color: "black",
						fontSize: "13px",
						marginTop: "20px",
					}}
				>
					아직 회원이 아니세요? <span>회원가입</span>
				</Link>
			</LoginForm>
		</ModalContainer>
	);
};

export default LoginModal;

const ModalContainer = styled.div`
	display: ${(props) => (props.loginBox ? "flex" : "none")};
	position: absolute;
	left: ${(props) => `${props.loginPosition}px`};
	top: 30px;
	align-items: center;
	width: 240px;
	height: 240px;
	flex-direction: column;
	background-color: white;
	border: 1px solid;
	z-index: 999;
`;

const CloseBtn = styled.div`
	padding-top: 5px;
	font-size: 13px;
	cursor: pointer;
`;

const LoginForm = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 220px;
	height: 220px;
`;

const InputContainer = styled.form`
	padding-left: 0px;
	display: flex;
	flex-direction: row;
	width: 220px;
	justify-content: center;
	align-items: center;
	font-family: "Jomhuria";
	font-size: 1em;
`;

const Input = styled.input`
	font-size: 14px;
	width: 153px;
	height: 36px;
	border: 1px solid #cccccc;
	border-radius: 2px;
`;
const LoginButton = styled.button`
	width: 80px;
	height: 80px;
	color: #ffffff;
	background-color: #ffcb3c;
	border: 1px solid #ffcb3c;
	border-radius: 3px;
	:hover {
		cursor: pointer;
	}
`;

const InputItem = styled.div`
	display: flex;
	width: 220px;
	flex-direction: column;
	align-items: center;
`;
