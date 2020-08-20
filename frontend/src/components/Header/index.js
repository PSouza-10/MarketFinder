import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiMenu, FiSearch } from 'react-icons/fi'
import { Collapse } from './Collapse'

export default function Header({ children }) {
	const [open, setOpen] = useState(false)

	const handleOpen = () => { setOpen(!open) }

	return (
		<div className="container">
			<div className="header-brand">

				{children}

			</div>
			<FiMenu className="hamburguerMenu" onClick={() => handleOpen()} />
			<div className="break"></div>


			<Collapse open={open}>

				<ul>
					<li><Link to="/" className="headerLink" onClick={() => open ? handleOpen() : open}>Home</Link></li>
					<li><Link to="/about" className="headerLink" onClick={() => open ? handleOpen() : open}>About</Link></li>
					<li><Link to="/about" className="headerLink" onClick={() => open ? handleOpen() : open}>Uma</Link></li>
					<li><Link to="/login" className="headerLink" onClick={() => open ? handleOpen() : open}>Login</Link></li>
					<li><Link to="/register" className="headerLink" onClick={() => open ? handleOpen() : open}>Register</Link></li>


				</ul>
				<div className="break"></div>
				<Searchbar />

			</Collapse>

		</div >
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
