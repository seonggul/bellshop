import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import img1 from "../img/slide1.jpg";
import img2 from "../img/slide2.jpg";
import img3 from "../img/slide3.jpg";
import img4 from "../img/slide4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronCircleLeft,
	faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const ImgCarousel = () => {
	const [cuurrentImg, setCurrentImg] = useState(0);
	const imgRef = useRef(null);
	const TotalImg = 3;
	const nextImg = () => {
		if (cuurrentImg >= TotalImg) {
			setCurrentImg(0);
		} else {
			setCurrentImg(cuurrentImg + 1);
		}
	};
	const prevImg = () => {
		if (cuurrentImg === 0) {
			setCurrentImg(TotalImg);
		} else {
			setCurrentImg(cuurrentImg - 1);
		}
	};
	useEffect(() => {
		imgRef.current.style.trasition = "all 0.5s ease-in-out";
		setInterval(
			(imgRef.current.style.transform = `translateX(${cuurrentImg}00%),1000`)
		);
	}, [cuurrentImg]);
	return (
		<Container>
			<SliderContainer ref={imgRef}>
				<ul>
					<li data-index="">
						<Img src={img1} alt="img1" />
					</li>
					<li data-index="">
						<Img src={img2} alt="img2" />
					</li>
					<li data-index="">
						<Img src={img3} alt="img3" />
					</li>
					<li data-index="">
						<Img src={img4} alt="img4" />
					</li>
				</ul>
			</SliderContainer>
			<PrevButton onClick={prevImg}>
				<FontAwesomeIcon icon={faChevronCircleLeft} />
			</PrevButton>
			<NextButton onClick={nextImg}>
				<FontAwesomeIcon icon={faChevronCircleRight} />
			</NextButton>
		</Container>
	);
};

export default ImgCarousel;

const Container = styled.div`
	width: 1920px;
	height: 500px;
	overflow: hidden;
`;

const SliderContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: nowrap;
	flex-direction: row;
	ul {
		padding-left: 0px;
		display: flex;
		flex-wrap: nowrap;
		transition-timing-function: ease-in-out;
		transition-duration: 1s;
		transform: translate3d(1920px, 0px, 0px);
		li {
			:hover {
				cursor: pointer;
			}
		}
	}
`;

const PrevButton = styled.button`
	all: unset;
	z-index: 10;
	position: absolute;
	color: #636e72;
	border: 1px solid coral;
`;

const NextButton = styled.button`
	all: unset;
	z-index: 10;
	position: absolute;
	color: #636e72;
	border: 1px solid coral;
`;

const Img = styled.img``;
