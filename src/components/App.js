import React, { useState } from "react";
import AppRouter from "./Router";
import styled from "styled-components";
import SearchModal from "./SearchModal";

const App = () => {
	const [modalBox, setModalBox] = useState(false);

	return (
		<AppContainer modalBox={modalBox}>
			{modalBox ? (
				<SearchModal modalBox={modalBox} setModalBox={setModalBox} />
			) : (
				<></>
			)}
			<AppRouter modalBox={modalBox} setModalBox={setModalBox} />
		</AppContainer>
	);
};

export default App;

const AppContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	flex-direction: column;
	z-index: 0;
	background-color: "#636e72";
	overflow-y: auto;
	overflow-x: hidden;
	&::-webkit-scrollbar {
		width: 8px;
		border-radius: 6px;
		background: rgba(255, 255, 255, 0.4);
	}
	&::-webkit-scrollbar-thumb {
		background-color: rgba(0, 0, 0, 0.3);
		border-radius: 6px;
	}
`;
