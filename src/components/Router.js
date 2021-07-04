import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "../routes/Home";
import Community from "../routes/Community";
import Shop from "../routes/Shop";
import Cart from "../routes/Cart";
import Auth from "../routes/Auth";

const AppRouter = ({ modalBox, setModalBox }) => {
	return (
		<Router>
			<Header modalBox={modalBox} setModalBox={setModalBox} />
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
					<Route exact path="/cart">
						<Cart />
					</Route>
					<Route exact path="/auth">
						<Auth />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default AppRouter;
