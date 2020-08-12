import React from 'react';
import MenuIcon from '../../assets/images/icons/menu.svg';
import './styles.css';

export default function Header({ children }) {
	return (
		<div className="container">
			{children}
			<input type="text" placeholder="Pesquisar" className="searchBar" />
			<img src={MenuIcon} alt="Menu" className="Icon" />
		</div>
	);
}
