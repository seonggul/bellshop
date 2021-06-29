import React from "react";
import AppRouter from "./Router";
import styled from "styled-components";

const App = () => {
	return (
		<AppContainer>
			<AppRouter />
		</AppContainer>
	);
};

export default App;

const AppContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
`;
