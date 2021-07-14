import React from "react";
import styled from "styled-components";
import HomeContent from "../components/HomeContent";
import ImgCarousel from "../components/ImgCarousel";

const Home = () => {
	return (
		<Container>
			<ImgCarousel />
			<HomeContent />
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
