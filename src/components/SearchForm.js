import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchForm = () => {
	return (
		<Container>
			<input type="text" />
			<FontAwesomeIcon icon={faSearch} />
		</Container>
	);
};

export default SearchForm;

const Container = styled.form`
	display: flex;
	align-items: center;
	width: 220px;
	height: 25px;
	border: 1px solid #ced6e0;
	background-color: #ced6e0;
	border-radius: 10px;
	margin-right: 10px;
	input {
		background-color: #ced6e0;
		margin-left: 7px;
		width: 180px;
		border: none;
		font-family: "Roboto";
		font-size: 15px;
		font-weight: bold;
		:focus {
			outline: none;
		}
	}
`;
