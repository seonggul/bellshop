import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import new_banner from "../img/new_banner.jpg";
import { dbService, dbstorage } from "../fBase";
import { UserContext } from "../components/Store";
import moment from "moment";
import 스파클링 from "../img/1am스파클링.jpg";
import 닭가슴살큐브 from "../img/더프레시 닭가슴살 큐브.jpg";
import 무염닭가슴살 from "../img/맛있닭 무염 닭가슴살.jpg";
import 스테이크 from "../img/맛있닭 스테이크.jpg";
import 핫도그 from "../img/맛있닭 핫도그.jpg";
import 어묵볼 from "../img/어묵볼.jpg";
import 버거 from "../img/잇메이트 닭가슴살 버거.jpg";
import 볶음밥 from "../img/잇메이트 볶음밥.jpg";
import { Link } from "react-router-dom";

const New = () => {
	const [preParing, setPreParing] = useState(false);
	const [pdData, setPdData] = useState([]);
	const [brands, setBrands] = useState([]);
	let productData = [];
	let brand = [];
	let image;
	const newProduct = {
		name: "신상품",
		product: [
			{
				id: 1,
				name: "1am 스파클링",
				price: "1,200",
				brand: "더 프레시",
				img: 스파클링,
			},
			{
				id: 2,
				name: "닭가슴살 볶음밥",
				price: "1,200",
				brand: "러브잇",
				img: 닭가슴살큐브,
			},
			{
				id: 3,
				name: "무염 닭가슴살",
				price: "1,200",
				brand: "맛있닭",
				img: 무염닭가슴살,
			},
			{
				id: 4,
				name: "닭가슴살 스테이크",
				price: "1,200",
				brand: "맛있닭",
				img: 스테이크,
			},
			{
				id: 5,
				name: "핫도그",
				price: "1,200",
				brand: "맛있닭",
				img: 핫도그,
			},
			{
				id: 6,
				name: "어묵볼 100g",
				price: "1,200",
				brand: "잇메이트",
				img: 어묵볼,
			},
			{
				id: 7,
				name: "닭가슴살 버거",
				price: "1,200",
				brand: "잇메이트",
				img: 버거,
			},
			{
				id: 8,
				name: "볶음밥",
				price: "1,200",
				brand: "잇메이트",
				img: 볶음밥,
			},
		],
	};
	/* before7day = moment().subtract(7, "days").format("YYYY-MM-DD");
	
	const context = useContext(UserContext);
	console.log(context);
	
	 	const newitem = {
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
	/* 	const getData = async () => {
		try {
			await dbService
				.collection("shopitem")
				.get()
				.then((data) => {
					data.forEach((doc) => {
						productData.push(doc.data());
					});
				});
			await setPdData(productData);
			setPreParing(true);
			await console.log(pdData);
			await dbService
				.collection("brands")
				.get()
				.then((data) =>
					data.forEach((doc) => {
						brand.push(doc.data());
					})
				);
			await setBrands(brand);
			await console.log(brands);

			image = await dbstorage.ref("/new1.jpg");
			var test = await dbstorage.refFromURL(
				"gs://yeongeoli.appspot.com/new1.jpg"
			);
			await console.log(test);

			let brandname = brand.find((e) => {
				if (e.id === 3) {
					return e.name;
				}
				return 0;
			});
			console.log(brandname.name);

			console.log(preParing);
		} catch (error) {
			console.log(error);
		}
	};

	const newProductView =
		pdData &&
		pdData.map((a) => {
			return (
				<ContentLi key={a.id}>
					<image src={image} alt="사진" />
					<span>{a.name}</span>
					<span>{a.price}</span>
				</ContentLi>
			);
			/* if (moment(before7day).isAfter(a.date) === false) {
				let brandname =
					brands &&
					brands.find((e) => {
						if (e.brand === a.brand) {
							return e.brand;
						}
					});
				
			} 
		}); */

	/* useEffect(() => {
		getData();
	}, []);
 */

	const newView = newProduct.product.map((a) => {
		return (
			<Link to="/detail">
				<ContentLi key={a.id}>
					<div>
						<img src={a.img} alt="사진" />
						<div>
							<span>{a.name}</span>
							<span style={{ fontWeight: "bold" }}>{a.price}원</span>
						</div>
					</div>
				</ContentLi>
			</Link>
		);
	});

	return (
		<Container>
			<Img src={new_banner} alt="new_banner" />
			<SubTitle>
				<h2>신상품</h2>
			</SubTitle>
			<NewContent>
				<ContentUl>{newView}</ContentUl>
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
	justify-content: flex-start;
	list-style: none;
	padding-left: 0px;
`;

const ContentLi = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 300px;
	height: 280px;

	img {
		width: 200px;
		height: 200px;
	}
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}
`;
