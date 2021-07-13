import React from "react";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "../routes/Home";
import Ranking from "../routes/Ranking";
import New from "../routes/New";
import Event from "../routes/Event";
import Cart from "../routes/Cart";
import Auth from "../routes/Auth";
import Join from "../routes/Join";
import HotDeal from "../routes/HotDeal";
import Footer from "./Footer";
import styled from "styled-components";

const AppRouter = ({ modalBox, setModalBox }) => {
	return (
		<Router>
			<Header modalBox={modalBox} setModalBox={setModalBox} />
			<Content>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/ranking">
						<Ranking />
					</Route>
					<Route exact path="/new">
						<New />
					</Route>
					<Route exact path="/hotdeal">
						<HotDeal />
					</Route>
					<Route exact path="/join">
						<Join />
					</Route>
					<Route exact path="/event">
						<Event />
					</Route>
					<Route exact path="/cart">
						<Cart />
					</Route>
					<Route exact path="/auth">
						<Auth />
					</Route>
				</Switch>
			</Content>
			<Footer />
		</Router>
	);
};

export default AppRouter;

const Content = styled.div`
	margin-top: 30px;
	background-color: #f7f7f7;
`;
