import React, { useRef, useState } from "react";
import styled from "styled-components";

const HomeContent = ({ newProduct }) => {
	const [moreOpen, setMoreOpen] = useState(false);
	const titlePosition = useRef();

	const scrollToTitle = () => {
		setMoreOpen(false);
		titlePosition.current.scrollIntoView({
			top: 0,
			behavior: "smooth",
		});
	};

	const viewMoreOpen = () => {
		return (
			<MoreDiv
				onClick={() => {
					setMoreOpen(true);
					titlePosition.current.scrollIntoView({
						top: 0,
						behavior: "smooth",
					});
				}}
			>
				<span>+ 상품더보기</span>
			</MoreDiv>
		);
	};

	const viewMoreClose = () => {
		return (
			<MoreDiv
				onClick={() => {
					setMoreOpen(false);
					titlePosition.current.scrollIntoView({
						top: 0,
						behavior: "smooth",
					});
				}}
			>
				<span>닫기</span>
			</MoreDiv>
		);
	};

	const viewContent = newProduct.product.map((a) => {
		if (a.id <= 3) {
			return (
				<ContentLi key={a.id}>
					<ProductImg src={a.img} />
					<span>
						{a.name}({a.brand})
					</span>

					<span>{a.price}</span>
				</ContentLi>
			);
		} else if (a.id > 3) {
			return (
				<HiddenContent key={a.id} moreOpen={moreOpen}>
					<ProductImg src={a.img} />
					<span>
						{a.name}({a.brand})
					</span>

					<span>{a.price}</span>
				</HiddenContent>
			);
		}
	});

	return (
		<Container ref={titlePosition}>
			<h2>{newProduct.name}</h2>
			<ContentUl>{viewContent}</ContentUl>
			{moreOpen ? viewMoreClose() : viewMoreOpen()}
		</Container>
	);
};

export default HomeContent;

const Container = styled.div`
	margin-top: 25px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 1100px;
	height: auto;
	padding-bottom: 50px;
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

const HiddenContent = styled(ContentLi)`
	display: ${(props) => (props.moreOpen ? "flex" : "none")};
`;

const ProductImg = styled.img`
	width: 280px;
	height: 250px;
	border: 1px solid #b2bec3;
`;

const MoreDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 200px;
	height: 30px;
	border: 1px solid #ced6e0;
	border-radius: 5px;
	cursor: pointer;
`;
