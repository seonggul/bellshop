import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SearchModal = ({ modalBox, setModalBox }) => {
	console.log(modalBox);
	return (
		<ModalContainer modalBox={modalBox}>
			<CloseBtn
				onClick={() => {
					return setModalBox(false);
				}}
			>
				<FontAwesomeIcon icon={faTimes} />
			</CloseBtn>

			<InputContainer>
				<Input type="text" />
				<span style={{ cursor: "pointer" }}>Search</span>
			</InputContainer>
		</ModalContainer>
	);
};

export default SearchModal;

const ModalContainer = styled.div`
	display: ${(props) => (props.modalBox ? "flex" : "none")};
	position: absolute;
	opacity: 0.9;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	flex-direction: column;
	background-color: white;
	z-index: 999;
`;

const CloseBtn = styled.div`
	top: 100px;
	right: 5%;
	font-size: 30px;
	cursor: pointer;
	width: 70px;
	height: 70px;
	position: absolute;
`;

const InputContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 76%;
	position: absolute;
	top: 25%;
	border-bottom: 1px solid #000;
	font-family: "Jomhuria";
	font-size: 2em;
`;

const Input = styled.input`
	padding-bottom: 10px;
	border-style: none;
	width: 83%;
	height: 42px;
	font-size: 1.5em;
	:focus {
		outline: none;
	}
`;
