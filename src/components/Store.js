import React, { useState, useEffect, createContext } from "react";
import { authService, dbService } from "../fBase";

export const UserContext = createContext(null);

const UserStore = (props) => {
	const [userObj, setUserObj] = useState(null);

	useEffect(() => {
		authService.onAuthStateChanged((user) => {
			console.log(user);

			if (user) {
				setUserObj({
					displayName: user.displayName,
					uid: user.uid,
					email: user.email,
					updateProfile: (args) => user.updateProfile(args),
				});
			} else {
				setUserObj(null);
			}
		});
		return authService.onAuthStateChanged((user) => {
			console.log(user);

			if (user) {
				setUserObj({
					displayName: user.displayName,
					uid: user.uid,
					email: user.email,
					updateProfile: (args) => user.updateProfile(args),
				});
			} else {
				setUserObj(null);
			}
		});
	}, []);

	return (
		<UserContext.Provider value={userObj}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserStore;
