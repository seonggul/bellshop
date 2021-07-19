import React, { useState, useEffect } from "react";
import AppRouter from "./Router";
import styled from "styled-components";
import { fbInstance, authService } from "../fBase";

const App = () => {
	const [initial, setInitial] = useState(false);
	const [userObj, setUserObj] = useState(null);

	useEffect(() => {
		console.log(fbInstance);
		/* authService.onAuthStateChanged((user) => {
			if (user) {
				setUserObj({
					displayName: user.displayName,
					uid: user.uid,
					updateProfile: (args) => user.updateProfile(args),
				});
			} else {
				setUserObj(null);
			}
			setInitial(true);
		}); */
	}, []);
	return (
		<AppContainer>
			<AppRouter /* userObj={userObj} initial={initial} */ />
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
