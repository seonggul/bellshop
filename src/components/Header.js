import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
	faDumbbell,
	faSearch,
	faShoppingCart,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DropDown from "./NaviDropDown";

const Header = ({ modalBox, setModalBox }) => {
	const [drop, setDrop] = useState(false);
	return (
		<>
			<Container>
				<MainLogo>
					<Link to="/Home" style={{ color: "black", textDecoration: "none" }}>
						<FontAwesomeIcon icon={faDumbbell} />
						<span
							style={{
								paddingLeft: "5px",
								fontSize: "50px",
								fontFamily: "Jomhuria",
							}}
						>
							Bell Shop
						</span>
					</Link>
				</MainLogo>
				<Navi>
					<NaviUl>
						<Item1>
							<Link
								to="/shop"
								style={{ color: "black", textDecoration: "none" }}
							>
								Shop
							</Link>
						</Item1>
						<Item2>
							<Link
								to="/community"
								style={{ color: "black", textDecoration: "none" }}
							>
								Community
							</Link>
						</Item2>
					</NaviUl>
				</Navi>

				<Icon>
					<SearchContainer>
						<FontAwesomeIcon
							icon={faSearch}
							onClick={() => setModalBox(true)}
						/>
					</SearchContainer>

					<Link to="/cart" style={{ color: "black", textDecoration: "none" }}>
						<FontAwesomeIcon icon={faShoppingCart} />
					</Link>
					<Link to="/auth" style={{ color: "black", textDecoration: "none" }}>
						<FontAwesomeIcon icon={faUser} style={{}} />
					</Link>
				</Icon>

				<DropDown drop={drop} />
			</Container>
		</>
	);
};

export default Header;

const Container = styled.div`
	position: absolute;
	margin-top: 0px;
	display: flex;
	width: 87%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const MainLogo = styled.div`
	font-size: 30px;
`;

const Navi = styled.div`
	width: 310px;
	font-size: 25px;
	font-family: "Big Shoulders Stencil Display";
`;

const NaviUl = styled.ul`
	list-style: none;
	padding-left: 0px;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`;

const Icon = styled.div`
	display: flex;
	width: 80px;
	justify-content: space-between;
`;

const SearchContainer = styled.div`
	:hover {
		cursor: pointer;
	}
`;

const Item1 = styled.li`
	position: relative;
	display: inline-block;
	:hover {
	}
`;
const Item2 = styled.li`
	position: relative;
	display: inline-block;
	:hover {
	}
`;
