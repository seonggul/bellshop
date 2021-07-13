import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Join = () => {
	//male이 true일 때 남자 선택, false일 때 여자 선택
	const [male, setMale] = useState(null);
	useEffect(() => {
		console.log(male);
	}, []);
	return (
		<Container>
			<JoinBg>
				<JoinInput>
					<h2>회원가입</h2>
					<InputItem>
						<span>아이디</span>
						<input></input>
						<DuplicateButton>중복확인</DuplicateButton>
					</InputItem>
					<InputItem>
						<span>비밀번호</span>
						<input></input>
					</InputItem>
					<InputItem>
						<span>비밀번호 확인</span>
						<input></input>
					</InputItem>
					<InputItem>
						<span>이름</span>
						<input></input>
					</InputItem>
					<InputItem>
						<span>휴대폰번호</span>
						<input></input>
					</InputItem>
					<InputItem>
						<span>성별</span>
						<MaleButton
							male={male}
							onClick={() => setMale(true)}
							style={{ marginLeft: "5px" }}
						>
							남
						</MaleButton>
						<FemaleButton male={male} onClick={() => setMale(false)}>
							여
						</FemaleButton>
					</InputItem>
					<InputItem>
						<span>이메일</span>
						<input></input>
					</InputItem>
					<JoinButton>회원가입</JoinButton>
				</JoinInput>
			</JoinBg>
		</Container>
	);
};

export default Join;

const Container = styled.div`
	width: 100vw;
	height: 900px;
	display: flex;
	justify-content: center;
`;

const JoinBg = styled.div`
	margin-top: 60px;
	background-color: #ffffff;
	width: 800px;
	height: 800px;
	border: 1px solid #dddddd;
`;

const JoinInput = styled.div`
	display: flex;
	height: 700px;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`;

const InputItem = styled.div`
	width: 600px;
	height: 60px;
	display: flex;
	align-items: center;
	span {
		width: 100px;
	}
	input {
		margin-left: 5px;
		font-size: 20px;
		width: 400px;
		height: 50px;
		border: 1px solid #cccccc;
		border-radius: 2px;
	}
`;

const JoinButton = styled.button`
	margin-top: 20px;
	width: 600px;
	height: 50px;
	font-size: 20px;
	color: #ffffff;
	background-color: #ff6001;
	border: 1px solid #ff6001;
	border-radius: 5px;
`;

const DuplicateButton = styled.button`
	color: #ffffff;
	background-color: #808080;
	margin-left: 15px;
	height: 50px;
	border: 1px solid #808080;
	border-radius: 3px;
`;

const MaleButton = styled.button`
	width: 100px;
	height: 40px;
	color: ${(props) => {
		if (props.male === null) {
			return "#cccccc";
		} else {
			return props.male ? "#ff6001" : "#cccccc";
		}
	}};
	background-color: #ffffff;
	border: ${(props) => {
		if (props.male === null) {
			return "1px solid #cccccc";
		} else {
			return props.male ? "1px solid #ff6001" : "1px solid #cccccc";
		}
	}};
	border-radius: 2px;
	font-size: 20px;
`;
const FemaleButton = styled.button`
	width: 100px;
	height: 40px;
	color: ${(props) => {
		if (props.male === null) {
			return "#cccccc";
		} else {
			return props.male ? "#cccccc" : "#ff6001";
		}
	}};
	background-color: #ffffff;
	border: ${(props) => {
		if (props.male === null) {
			return "1px solid #cccccc";
		} else {
			return props.male ? "1px solid #cccccc" : "1px solid #ff6001";
		}
	}};
	border-radius: 2px;
	font-size: 20px;
`;
