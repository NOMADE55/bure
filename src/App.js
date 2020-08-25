import React from 'react';
import Header from '@components/Header';
import CategorySelector from '@components/CategorySelector';
import Footer from '@components/Footer';
import '@assets/scss/main.scss';
import CategoryList from '@components/CategoryList';

function App() {
	return (
		<React.Fragment>
			<div className="container">
				<Header />
				<CategorySelector />
				<CategoryList />
				<Footer />
			</div>
		</React.Fragment>
	);
}

export default App;
