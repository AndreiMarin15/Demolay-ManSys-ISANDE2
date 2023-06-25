import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";



export const PrimaryNav = styled.nav`
	z-index: 14;
	height: 50px;
	display: flex;
	background: #350059; 
	justify-content: space-between;
	padding: 0.18rem calc((100vw - 1500px) / 2);
	font-color: white;
`;
export const MenuLink = styled(Link)`
	color: #fff;
	display: flex;
	cursor: pointer;
	align-items: center;
	outline: 1px white;
	text-decoration: none;
	padding: 0 1.2rem;
	height: 100%;
	&.active {
		color: white;
	}

	&.hover {
		color: #c2a2d8;
	}
`;


export const Hamburger = styled(FaBars)`
	display: none;
	color: #ffffff;
	@media screen and (max-width: 768px) {
		display: block;
		font-size: 1.9rem;
		top: 0;
		right: 0;
		position: absolute;
		cursor: pointer;
		transform: translate(-100%, 75%);
	}
`;
export const Menu = styled.div`
	display: flex;
	align-items: center;
	margin-right: 25px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
