import React from "react";
import AppRouter from "./Router";
import styled from "styled-components";
import { fbInstance } from "../fBase";
import UserStore from "./Store";

const App = () => {
	console.log(fbInstance);
	return (
		<UserStore>
			<AppContainer>
				<AppRouter />
			</AppContainer>
		</UserStore>
	);
};

export default App;

const AppContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	z-index: 0;
	background-color: "#636e72";
	overflow-x: hidden;
`;
