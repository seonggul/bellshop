import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "../routes/Home";
import Ranking from "../routes/Ranking";
import New from "../routes/New";
import Event from "../routes/Event";
import Cart from "../routes/Cart";
import Service from "../routes/Service";
import Join from "../routes/Join";
import HotDeal from "../routes/HotDeal";
import MyInfo from "../routes/MyInfo";
import Footer from "./Footer";
import Detail from "./Detail";
import styled from "styled-components";

const AppRouter = () => {
	const [userLogin, setUserLogin] = useState(false);
	const [fixedHeader, setFixedHeader] = useState(false);

	return (
		<Router>
			<Header
				userLogin={userLogin}
				setUserLogin={setUserLogin}
				fixedHeader={fixedHeader}
				setFixedHeader={setFixedHeader}
			/>
			<Content fixedHeader={fixedHeader}>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/ranking">
						<Ranking />
					</Route>
					<Route exact path="/detail">
						<Detail />
					</Route>
					<Route exact path="/new">
						<New />
					</Route>
					<Route exact path="/hotdeal">
						<HotDeal />
					</Route>
					<Route exact path="/join">
						<Join setUserLogin={setUserLogin} />
					</Route>
					<Route exact path="/event">
						<Event />
					</Route>
					<Route exact path="/cart">
						<Cart />
					</Route>
					<Route exact path="/service">
						<Service />
					</Route>
					<Route exact path="/myinfo">
						<MyInfo />
					</Route>
					{/* <Route exact path="/auth">
						<Auth />
					</Route> */}
				</Switch>
			</Content>
			<Footer />
		</Router>
	);
};

export default AppRouter;

const Content = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f7f7f7;
	margin-top: ${(props) => (props.fixedHeader ? "71px" : "0")};
`;
