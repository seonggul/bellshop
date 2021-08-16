import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../components/Store";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import OrderList from "../myinfoRoutes/OrderList";
import CounselList from "../myinfoRoutes/CounselList";
import WishList from "../myinfoRoutes/WishList";
import UploadProduct from "../myinfoRoutes/UploadProduct";
import EditMyinfo from "../myinfoRoutes/EditMyinfo";
import OrderConfirm from "../myinfoRoutes/OrderConfirm";

const MyInfo = () => {
	const [titleNum, setTitleNum] = useState(0);
	const context = useContext(UserContext);
	console.log(context);
	const naviList = [
		{ id: 1, name: "구매내역", link: "/myinfo/" },
		{ id: 2, name: "찜한상품", link: "/myinfo/wish_list" },
		{ id: 3, name: "1:1문의", link: "/myinfo/counsel_list" },
		{ id: 4, name: "내 정보수정", link: "/myinfo/edit_myinfo" },
		{ id: 5, name: "상품등록", link: "/myinfo/upload_product" },
		{ id: 6, name: "주문확인", link: "/myinfo/order_confrim" },
	];
	const naviList2 = [
		{ id: 1, name: "구매내역", link: "/myinfo/" },
		{ id: 2, name: "찜한상품", link: "/myinfo/wish_list" },
		{ id: 3, name: "1:1문의", link: "/myinfo/counsel_list" },
		{ id: 4, name: "내 정보수정", link: "/myinfo/edit_myinfo" },
	];

	const list = naviList.map((e, index) => {
		return (
			<Link to={e.link}>
				<li
					key={index}
					onClick={() => {
						setTitleNum(index);
					}}
				>
					{e.name}
				</li>
			</Link>
		);
	});

	const list2 = naviList2.map((e, index) => {
		return (
			<Link to={e.link}>
				<li
					key={index}
					onClick={() => {
						setTitleNum(index);
					}}
				>
					{e.name}
				</li>
			</Link>
		);
	});

	return (
		<Router>
			<Container>
				<SmallContainer>
					<NaviTitle>
						<h3>{naviList[titleNum].name}</h3>
					</NaviTitle>
					<MyInfoNavi>
						<ul>{list}</ul>
					</MyInfoNavi>
					<MyInfoContent>
						<Switch>
							<Route exact path="/myinfo/">
								<OrderList />
							</Route>
							<Route exact path="/myinfo/counsel_list">
								<CounselList />
							</Route>
							<Route exact path="/myinfo/wish_list">
								<WishList />
							</Route>
							<Route exact path="/myinfo/upload_product">
								<UploadProduct />
							</Route>
							<Route exact path="/myinfo/edit_myinfo">
								<EditMyinfo />
							</Route>
							<Route exact path="/myinfo/order_confrim">
								<OrderConfirm />
							</Route>
						</Switch>
					</MyInfoContent>
				</SmallContainer>
			</Container>
		</Router>
	);
};

export default MyInfo;

const Container = styled.div`
	width: 100vw;
	height: 80vh;
	display: flex;
	justify-content: center;
`;

const SmallContainer = styled.div`
	width: 990px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`;

const NaviTitle = styled.div`
	width: 120px;
	height: 30px;
	margin-top: 30px;
	padding-left: 15px;
	position: fixed;
`;

const MyInfoNavi = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 120px;
	position: fixed;
	margin-top: 100px;
	border: 2px solid #cccccc;
	color: #0a3d62;
	ul {
		width: 100%;
		padding: 0px;
		list-style: none;
		a {
			text-decoration: none;
			color: #000000;
		}
		li {
			width: 101px;
			height: 25px;
			padding-left: 15px;
			padding-top: 5px;
			padding-bottom: 5px;
			:hover {
				border: 2px solid #ffcb3c;
				font-weight: bold;
				color: #33336e;
			}
		}
	}
`;

const MyInfoContent = styled.div`
	display: flex;
	margin-left: 122px;
`;
