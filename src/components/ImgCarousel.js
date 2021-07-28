import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import img1 from "../img/slide1.jpg";
import img2 from "../img/slide2.jpg";
import img3 from "../img/slide3.jpg";
import img4 from "../img/slide4.jpg";
import img5 from "../img/slide5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
	faChevronCircleLeft,
	faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const ImgCarousel = () => {
	const imgArray = [img1, img2, img3, img4, img5];
	const ulRef = useRef(null);
	const liRef = useRef(null);
	const slideLen = imgArray.length;
	const slideWidth = 1920; // slide width
	const slideSpeed = 300; // slide speed
	const startNum = 0; // initial slide index (0 ~ 4)

	let curIndex = startNum;
	let curSlide;

	const nextImg = () => {
		if (curIndex <= slideLen - 1) {
			ulRef.current.style.transition = slideSpeed + "ms";
			ulRef.current.style.transform =
				"translate3d(-" + slideWidth * (curIndex + 2) + "px, 0px, 0px)";
		}
		if (curIndex === slideLen - 1) {
			setTimeout(function () {
				ulRef.current.style.transition = "0ms";
				ulRef.current.style.transform =
					"translate3d(-" + slideWidth + "px, 0px, 0px)";
			}, slideSpeed);
			curIndex = -1;
		}
		curSlide.classList.remove("slide_active");

		curSlide = ulRef.current.children[++curIndex];
		curSlide.classList.add("slide_active");
	};

	const prevImg = () => {
		if (curIndex >= 0) {
			ulRef.current.style.transition = slideSpeed + "ms";
			ulRef.current.style.transform =
				"translate3d(-" + slideWidth * curIndex + "px, 0px, 0px)";
		}
		if (curIndex === 0) {
			setTimeout(function () {
				ulRef.current.style.transition = "0ms";
				ulRef.current.style.transform =
					"translate3d(-" + slideWidth * slideLen + "px, 0px, 0px)";
			}, slideSpeed);
			curIndex = slideLen;
		}
		curSlide.classList.remove("slide_active");
		curSlide = ulRef.current.children[--curIndex];
		curSlide.classList.add("slide_active");
	};

	const imgSlider = () => {
		let firstChild = ulRef.current.firstElementChild;
		let lastChild = ulRef.current.lastElementChild;
		let clonedFirst = firstChild.cloneNode(true);
		let clonedLast = lastChild.cloneNode(true);
		ulRef.current.appendChild(clonedFirst);
		ulRef.current.insertBefore(clonedLast, ulRef.current.firstElementChild);
		ulRef.current.style.transform =
			"translate3d(-" + slideWidth * (startNum + 1) + "px, 0px, 0px)";
		curSlide = liRef.current; // current slide dom

		curSlide.classList.add("slide_active");
	};

	useEffect(() => {
		imgSlider();
	}, []);

	const carousel = imgArray.map((a, index) => {
		return (
			<li ref={liRef} alt={a} id={index}>
				<Link to="/new">
					<Img src={a} />
				</Link>
			</li>
		);
	});

	return (
		<Container>
			<SliderContainer>
				<ul ref={ulRef}>{carousel}</ul>
			</SliderContainer>
			<ButtonContainer>
				<Button onClick={prevImg}>
					<FontAwesomeIcon icon={faChevronCircleLeft} />
				</Button>
				<Button onClick={nextImg}>
					<FontAwesomeIcon icon={faChevronCircleRight} />
				</Button>
			</ButtonContainer>
		</Container>
	);
};

export default ImgCarousel;

const Container = styled.div`
	width: 1920px;
	height: 500px;
	overflow: hidden;
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
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

		//transform: ${(props) => `translate3d(-${props.cuurrentImg}00%,0px,0px)`};
	}
`;

const ButtonContainer = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 920px;
	height: 10px;
	z-index: 10;
`;

const Button = styled.button`
	all: unset;
	color: #333;
	font-size: 50px;
	opacity: 0.65;
	:focus {
		cursor: pointer;
	}
	:hover {
		opacity: 0.95;
	}
`;

const Img = styled.img``;
