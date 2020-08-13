import React from 'react';
// import MenuIcon from '../../assets/images/icons/menu.svg';
import './styles.css';
import { Link } from 'react-router-dom';
// import searchIcon from '../../assets/images/icons/search.svg'

export default function Header({ children }) {
	return (
		<div className="container">
			<div className="container" id="header-brand">

				{children}
				<ul>
					<li><Link to="/" className="headerLink">Home</Link></li>
					<li><Link to="/about" className="headerLink">About</Link></li>
					<li><Link to="/about" className="headerLink">About</Link></li>
					<li><Link to="/about" className="headerLink">About</Link></li>
					<li><Link to="/about" className="headerLink">About</Link></li>
					<li><Link to="/about" className="headerLink">About</Link></li>


				</ul>
			</div>
			<input type="text" placeholder="Pesquisar..." className="searchBar" />
			{/* <img src={searchIcon} className="searchIcon" alt="search"></img> */}
			{/* <img src={MenuIcon} alt="Menu" className="Icon" /> */}
		</div>
	);
}
