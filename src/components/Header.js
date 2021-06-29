import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
	faDumbbell,
	faSearch,
	faShoppingCart,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
	return (
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
					<li>
						<Link to="/shop" style={{ color: "black", textDecoration: "none" }}>
							Shop
						</Link>
					</li>
					<li>
						<Link
							to="/community"
							style={{ color: "black", textDecoration: "none" }}
						>
							Community
						</Link>
					</li>
				</NaviUl>
			</Navi>
			<Icon>
				<FontAwesomeIcon icon={faSearch} style={{}} />
				<FontAwesomeIcon icon={faShoppingCart} style={{}} />
				<FontAwesomeIcon icon={faUser} style={{}} />
			</Icon>
		</Container>
	);
};

export default Header;

const Container = styled.div`
	margin-top: 0px;
	display: flex;
	width: 90%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const MainLogo = styled.div`
	font-size: 30px;
`;

const Navi = styled.div`
	width: 300px;
	font-size: 25px;
`;

const NaviUl = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`;

const Icon = styled.div`
	display: flex;
	width: 80px;
	justify-content: space-between;
`;
