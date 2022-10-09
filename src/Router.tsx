import { Routes, Route } from 'react-router-dom';

import { DefaultLayout } from './layouts/DefaultLayout';

import { Home } from './pages/Home';
import { Checkout } from './pages/Checkout';
import { CheckoutSuccess } from './pages/CheckoutSuccess';

export const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<DefaultLayout />}>
				<Route path='/' element={<Home />} />
				
				<Route path='/checkout'>
					<Route index element={<Checkout />} />
					<Route path="success" element={<CheckoutSuccess />} />
				</Route>
			</Route>
		</Routes>
	);
};
