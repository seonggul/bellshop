import React, { useState, useEffect, createContext } from "react";
import { authService } from "../fBase";

export const UserContext = createContext(null);

const UserStore = (props) => {
	const [userObj, setUserObj] = useState(null);

	useEffect(() => {
		try {
			authService.onAuthStateChanged((user) => {
				console.log(user);
				if (user) {
					setUserObj({
						displayName: user.displayName,
						uid: user.uid,
						updateProfile: (args) => user.updateProfile(args),
					});
				} else {
					setUserObj(null);
				}
			});
		} catch (error) {
			console.log(error.message);
		}
	}, []);

	return (
		<UserContext.Provider value={userObj}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserStore;
