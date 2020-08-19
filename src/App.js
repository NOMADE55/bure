import React from 'react';
import Header from './components/Header';
import CategorySelector from './components/CategorySelector';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

function App() {
	return (
		<React.Fragment>
			<Header />
			<CategorySelector />
			<ProductList />
			<Footer />
		</React.Fragment>
	);
}

export default App;
