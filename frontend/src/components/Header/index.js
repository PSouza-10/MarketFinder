import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiMenu, FiSearch } from 'react-icons/fi'
// import searchIcon from '../../assets/images/icons/search.svg'

export default function Header({ children }) {
	return (
		<div className="container">
			<div className="header-brand">

				{children}

			</div>
			<ul>
				<li><Link to="/" className="headerLink">Home</Link></li>
				<li><Link to="/about" className="headerLink">About</Link></li>
				<li><Link to="/about" className="headerLink">Teste</Link></li>
				<li><Link to="/about" className="headerLink">About</Link></li>
				<li><Link to="/about" className="headerLink">About</Link></li>
			</ul>
			<Searchbar />
			<FiMenu className="hamburguerMenu" />
		</div>
	);
}


const Searchbar = () => {
	return (
		<div className="searchBar">
			<input type="text" placeholder="Pesquisar..." />
			<FiSearch className="icon" />

		</div>
	)
}