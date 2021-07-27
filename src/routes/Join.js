import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { authService, dbService } from "../fBase";
const Join = ({ setUserLogin }) => {
	//male이 true일 때 남자 선택, false일 때 여자 선택
	const [male, setMale] = useState(null);
	const [email, setEmail] = useState("");
	const [pw, setPw] = useState("");
	const [pwConfirm, setPwConfirm] = useState("");
	const [name, setName] = useState("");
	const [phoneNumber, setPhoneNumbe] = useState("");
	const [gender, setGender] = useState("");
	const history = useHistory();

	const onChange = (event) => {
		const {
			target: { name, value },
		} = event;
		console.log(value);
		if (name === "email") {
			setEmail(value);
		} else if (name === "pw") {
			setPw(value);
		} else if (name === "name") {
			setName(value);
		} else if (name === "phoneNumber") {
			setPhoneNumbe(value);
		} else if (name === "pwConfirm") {
			setPwConfirm(value);
		}
	};

	const duplicateConfirm = async (event) => {
		event.preventDefault();
		let data = [];
		let idData = await dbService.collection("users").get();
		await idData.docs.map((a) => {
			data.push(a.id);
			return 0;
		});
		console.log(data);
		if (data.indexOf(email) === -1) {
			window.alert("가입가능한 이메일입니다.");
			data = null;
		} else {
			window.alert("이미 존재하는 이메일입니다.");
			data = null;
		}
		console.log(data);
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		if (male === true) {
			setGender("male");
		} else if (male === false) {
			setGender("female");
		}
		if (pw !== pwConfirm) {
			window.alert("입력 비밀번호가 다릅니다.");
			setPwConfirm("");
			setPw("");
			event.preventDefault();
		}
		try {
			let data;
			let userId;

			data = await authService.createUserWithEmailAndPassword(email, pw);
			setUserLogin(true);
			userId = data.user.uid;
			console.log(userId);
			let users = await {
				uid: data.user.uid,
			};
			let userInfo = await {
				uid: data.user.uid,
				id: email,
				name,
				phoneNumber,
				gender,
			};
			try {
				console.log("정보넣기시작");
				await dbService
					.collection(userId)
					.doc("userInfo")
					.set(userInfo)
					.then(() => {
						console.log("정보넣기성공");
						setPwConfirm("");
						setPhoneNumbe("");
						setEmail("");
						setPw("");
						setName("");
					});
				await dbService
					.collection("users")
					.doc(email)
					.set(users)
					.then(() => {
						console.log("users 정보넣기성공");
						window.alert("회원가입성공! 로그인 되었습니다.");
					});
				history.push("/");
			} catch (error) {
				console.log("정보넣기실패" + error.messages);
			}
		} catch (error) {
			window.alert("회원가입 실패! 이메일 형식을 확인 해주세요.");
			console.log(error.messages);
		}
	};

	return (
		<Container>
			<JoinBg>
				<JoinInput onSubmit={onSubmit}>
					<h2>회원가입</h2>
					<InputItem>
						<span>아이디</span>
						<input
							value={email}
							type="email"
							name="email"
							placeholder="Email 형식으로 작성하세요"
							onChange={onChange}
							required
						></input>
						<DuplicateButton onClick={duplicateConfirm}>
							중복확인
						</DuplicateButton>
					</InputItem>
					<InputItem>
						<span>비밀번호</span>
						<input
							value={pw}
							name="pw"
							type="password"
							placeholder="비밀번호를 입력하세요"
							onChange={onChange}
							required
						></input>
					</InputItem>
					<InputItem>
						<span>비밀번호 확인</span>
						<input
							value={pwConfirm}
							type="password"
							name="pwConfirm"
							placeholder="비밀번호를 확인하세요"
							onChange={onChange}
							required
						></input>
					</InputItem>
					<InputItem>
						<span>이름</span>
						<input
							value={name}
							type="text"
							name="name"
							onChange={onChange}
							required
						></input>
					</InputItem>
					<InputItem>
						<span>휴대폰번호</span>
						<input
							value={phoneNumber}
							type="number"
							name="phoneNumber"
							placeholder=" - 를 뺴고 작성해주세요"
							onChange={onChange}
							required
						></input>
					</InputItem>
					<InputItem>
						<span>성별</span>
						<MaleButton
							type="button"
							male={male}
							onClick={() => setMale(true)}
							style={{ marginLeft: "5px" }}
						>
							남
						</MaleButton>
						<FemaleButton
							type="button"
							male={male}
							onClick={() => setMale(false)}
						>
							여
						</FemaleButton>
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

const JoinInput = styled.form`
	display: flex;
	height: 750px;
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
		padding-left: 10px;
		margin-left: 5px;
		font-size: 20px;
		width: 400px;
		height: 50px;
		border: 1px solid #cccccc;
		border-radius: 2px;
		::-webkit-outer-spin-button,
		::-webkit-inner-spin-button {
			-webkit-appearance: none;
		}
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
	:hover {
		cursor: pointer;
	}
`;

const DuplicateButton = styled.button`
	width: 70px;
	color: #ffffff;
	background-color: #808080;
	margin-left: 15px;
	height: 50px;
	border: 1px solid #808080;
	border-radius: 3px;
	:hover {
		cursor: pointer;
	}
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
