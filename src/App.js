import React from 'react';
import Header from '@components/Header';
import CategorySelector from '@components/CategorySelector';
import Footer from '@components/Footer';
import '@assets/scss/main.scss';
import CategoryList from '@components/CategoryList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ItemDetailContainer from '@components/ItemDetailContainer';

function App() {
	return (
		<main>
			<BrowserRouter>
				<div className="container">
					<Header />
					<CategorySelector />
					<CategoryList />
					<Footer />
					<Switch>
						<Route path="/product/:id" exact component={ItemDetailContainer} />
					</Switch>
				</div>
			</BrowserRouter>
		</main>
	);
}

export default App;
