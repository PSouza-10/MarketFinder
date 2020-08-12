import React from 'react';
import Button from '../Button';
import './styles.css';

export default function Card({ cardImg, title, other }) {
	return (
		<div className="card-container">
			<span className="card-title">{title}</span>
			<img src={cardImg} alt={title} className="card-img" />
			{Object.keys(other).map((key) => (
				<div style={{ marginBottom: '10px' }}>
					<span className="card-text">{`${key}: ${other[key]}`} </span>
					<br />
				</div>
			))}
			<Button color="btn-secondary" size="btn-block">
				Ver Mercados
			</Button>
		</div>
	);
}
