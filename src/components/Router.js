import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "../routes/Home";
import Community from "../routes/Community";
import Shop from "../routes/Shop";

const AppRouter = () => {
	return (
		<Router>
			<Header />
			<div>
				<Switch>
					<Route exact path="/home">
						<Home />
					</Route>
					<Route exact path="/community">
						<Community />
					</Route>
					<Route exact path="/shop">
						<Shop />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default AppRouter;
