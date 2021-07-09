import React from "react";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "../routes/Home";
import Community from "../routes/Community";
import Shop from "../routes/Shop";
import Cart from "../routes/Cart";
import Auth from "../routes/Auth";
import styled from "styled-components";

const AppRouter = ({ modalBox, setModalBox }) => {
	return (
		<Router>
			<Header modalBox={modalBox} setModalBox={setModalBox} />
			<Content style={{ paddingTop: "80px" }}>
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
			</Content>
		</Router>
	);
};

export default AppRouter;

const Content = styled.div`
	margin-top: 220px;
`;
