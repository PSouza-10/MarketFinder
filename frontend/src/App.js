import React from 'react';
import './styles/global.css';
import Header from './components/Header';
import Footer from './components/Footer/index'
import Card from './components/UI/Card';
import CardGroup from './components/CardGroup';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AboutPage from './components/AboutPage'

function App() {
	return (
		<div className="App">
			<Header>MarketFinder</Header>

			<Routes />

			<Footer />
		</div>
	);
}

const Routes = () => {
	const products = useSelector((state) => state.Product.items);

	return (
		<Switch>
			<Route path="/about" exact render={() => <AboutPage />} />
			<Route
				path="/"
				exact
				render={() => (
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
				)}
			/>
		</Switch>

	);
};

export default App;
