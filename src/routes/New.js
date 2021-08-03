import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import new_banner from "../img/new_banner.jpg";
import { dbService } from "../fBase";
import { UserContext } from "../components/Store";
import moment from "moment";

const New = () => {
	const [preParing, setPreParing] = useState(false);
	const [data, setData] = useState();
	let productData = [];
	let brands = [];
	let before7day = moment().subtract(7, "days").format("YYYY-MM-DD");

	const context = useContext(UserContext);
	console.log(context);

	/* 	const newitem = {
		date: 20210802,

		id: 8,
		name: "더담은 닭가슴살 도시락",
		price: 3000,
		imgsrc: "new8",
		brandNum: 1,
	};
	const test2 = async () => {
		try {
			await dbService.collection("shopitem").doc("item8").set(newitem);
			window.alert("성공");
		} catch (error) {
			console.log(error.messages);
		}
	}; */
	const getData = async () => {
		try {
			await dbService
				.collection("shopitem")
				.get()
				.then((data) =>
					data.forEach((doc) => {
						productData.push(doc.data());
						setData(productData);
					})
				);
			await console.log(productData);
			await dbService
				.collection("brands")
				.get()
				.then((data) =>
					data.forEach((doc) => {
						brands.push(doc.data());
					})
				);
			await console.log(brands);
			await setPreParing(true);
			await console.log(preParing);
			let brandname = brands.find((e) => {
				if (e.id === 3) {
					return e.name;
				}
				return 0;
			});
			console.log(brandname.name);
		} catch (error) {
			console.log(error.messages);
		}
	};

	const newProductView = productData.map((a, index) => {
		console.log(a.date);
		<ContentLi key={index}>
			<span>test</span>
		</ContentLi>;
		/* if (moment(before7day).isAfter(a.date) === false) {
			let brandname = brands.find(a.brand);
			return (
				<ContentLi key={a.id}>
					<span>
						{a.name}({brandname.name})
					</span>

					<span>{a.price}</span>
				</ContentLi>
			);
		} */
	});

	useEffect(() => {
		getData();
		console.log(preParing);
	}, []);
	return (
		<Container>
			<Img src={new_banner} alt="new_banner" />
			<SubTitle>
				<h2>신상품</h2>
			</SubTitle>
			<NewContent>
				<ContentUl>
					{preParing ? newProductView : "데이터 받아오는중...."}
				</ContentUl>
			</NewContent>
		</Container>
	);
};

export default New;

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const SubTitle = styled.div`
	padding-top: 20px;
	width: 900px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	border-bottom: 2px solid #666666;
`;

const Img = styled.img`
	padding-top: 30px;
`;

const NewContent = styled.div`
	width: 900px;
	padding-top: 20px;
`;

const ContentUl = styled.ul`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
	list-style: none;
	padding-left: 0px;
`;

const ContentLi = styled.li`
	display: flex;
	flex-direction: column;
	padding-left: 40px;
	width: 300px;
	height: 340px;
`;
