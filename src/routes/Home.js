import React from "react";
import styled from "styled-components";
import ImgCarousel from "../components/ImgCarousel";

const Home = () => {
	return (
		<Container>
			<ImgCarousel />
			<span>Home</span>
		</Container>
	);
};

export default Home;

const Container = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
