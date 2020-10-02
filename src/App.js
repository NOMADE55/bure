import React from 'react';
import Header from '@components/Header';
import CategorySelector from '@components/CategorySelector';
import Footer from '@components/Footer';
import '@assets/scss/main.scss';
import CategoryList from '@components/CategoryList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ItemDetailContainer from '@components/ItemDetailContainer';
import { fromTheme } from '@store/selectors';
import { useSelector } from 'react-redux';
import ThemeToggler from '@components/ThemeToggler';

function App() {
	const isItDark = useSelector(fromTheme.getDarkTheme);
	return (
		<main className={`${ isItDark ? 'dark' : ''}`}>
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
			<div className="fixed-navigation">
				<ThemeToggler />
			</div>
		</main>
	);
}

export default App;
