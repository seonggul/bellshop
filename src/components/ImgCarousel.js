import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import img1 from "../img/slide1.jpg";
import img2 from "../img/slide2.jpg";
import img3 from "../img/slide3.jpg";
import img4 from "../img/slide4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
	faChevronCircleLeft,
	faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { slideImg } from "../any.json";

const ImgCarousel = () => {
	const [cuurrentImg, setCurrentImg] = useState(0);
	const [autoMove, setAutoMove] = useState(0);
	const imgRef = useRef(null);
	const TotalImg = slideImg.length - 1;
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
			setCurrentImg(cuurrentImg);
		}
	};

	useEffect(() => {
		imgRef.current.style.transition = "all 0.5s ease-in-out";
		imgRef.current.style.transform = `translateX(-${cuurrentImg}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
	}, [cuurrentImg]);

	return (
		<Container>
			<SliderContainer ref={imgRef} cuurrentImg={cuurrentImg}>
				<ul>
					<li>
						<Link to="/new">
							<Img src={slideImg[0].imgsrc} alt="img1" />
						</Link>
					</li>
					<li data-index="">
						<Link to="/new">
							<Img src={slideImg[1].imgsrc} alt="img2" />
						</Link>
					</li>
					<li data-index="">
						<Link to="/new">
							<Img src={slideImg[2].imgsrc} alt="img3" />
						</Link>
					</li>
					<li data-index="">
						<Link to="/new">
							<Img src={slideImg[3].imgsrc} alt="img4" />
						</Link>
					</li>
					<li data-index="">
						<Link to="/new">
							<Img src={slideImg[4].imgsrc} alt="img4" />
						</Link>
					</li>
				</ul>
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
