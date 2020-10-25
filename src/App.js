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
import { Cart } from '@components/Cart';

function App() {
	const isItDark = useSelector(fromTheme.getDarkTheme);
	return (
		<main className={`${ isItDark ? 'dark' : ''}`}>
			<BrowserRouter>
				<Route path={["/product/:id?", "/"]}>
					<div className="container">
						<Header />
						<CategorySelector />
						<CategoryList />
						<Footer />
						<ItemDetailContainer />
					</div>
				</Route>
			</BrowserRouter>
			<div className="fixed-navigation">
				<Cart />
				<ThemeToggler />
			</div>
		</main>
	);
}

export default App;
