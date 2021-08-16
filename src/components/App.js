import React, { useState } from "react";
import AppRouter from "./Router";
import styled from "styled-components";
import { fbInstance } from "../fBase";
import UserStore from "./Store";

const App = () => {
	const [userLogin, setUserLogin] = useState(false);
	console.log(fbInstance);
	return (
		<UserStore userLogin={userLogin}>
			<AppContainer>
				<AppRouter userLogin={userLogin} setUserLogin={setUserLogin} />
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
