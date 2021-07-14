import React from "react";

const HomeContent = () => {
	const content = {
		name: "신상품",
		product: [
			{
				id: "1",
				name: "닭가슴살 스테이크",
				price: "1,200",
				brand: "맛있닭",
				img: "imgc/sample.jpg",
			},
			{
				id: "2",
				name: "닭가슴살 볶음밥",
				price: "1,200",
				brand: "러브잇",
				img: "imgc/sample.jpg",
			},
			{
				id: "3",
				name: "닭가슴살 스팀",
				price: "1,200",
				brand: "러브잇",
				img: "imgc/sample.jpg",
			},
			{
				id: "4",
				name: "닭가슴살 훈제",
				price: "1,200",
				brand: "잇메이트",
				img: "imgc/sample.jpg",
			},
			{
				id: "5",
				name: "닭가슴살 핫바",
				price: "1,200",
				brand: "잇메이트",
				img: "imgc/sample.jpg",
			},
			{
				id: "6",
				name: "오징어 한입",
				price: "1,200",
				brand: "맛있소",
				img: "imgc/sample.jpg",
			},
			{
				id: "7",
				name: "치즈 닭가슴살 스테이크",
				price: "1,200",
				brand: "맛있닭",
				img: "imgc/sample.jpg",
			},
			{
				id: "8",
				name: "저염 닭가슴살",
				price: "1,200",
				brand: "맛있닭",
				img: "imgc/sample.jpg",
			},
			{
				id: "9",
				name: "생 닭가슴살",
				price: "1,200",
				brand: "신선애",
				img: "imgc/sample.jpg",
			},
		],
	};

	const viewContent = () => {
		content.product.map(() => {
			return <div></div>;
		});
	};
	return (
		<div>
			<div>
				<h2>{content.name}</h2>
				{viewContent}
				<div>
					<span>+ 상품더보기</span>
				</div>
			</div>
		</div>
	);
};

export default HomeContent;
