import React from 'react';
import './styles/global.css';
import Header from './components/Header';
import Card from './components/UI/Card';
import CardGroup from './components/CardGroup';

import { useSelector } from 'react-redux';
function App() {
	const products = useSelector((state) => state.Product.items);

	return (
		<div className="App">
			<Header>MarketFinder</Header>
			<CardGroup>
				{products.map(({ Nome, image, Quantidade, Categoria, Valor }) => (
					<Card
						cardImg={image}
						title={Nome}
						other={{
							Quantidade,
							Categoria,
							Valor
						}}
					/>
				))}
			</CardGroup>
		</div>
	);
}

export default App;
