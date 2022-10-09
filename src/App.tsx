import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';

import { GlobalStyles } from './styles/globalStyles';
import { ProductsContextProvider } from './contexts/ProductsContext';
import { AddressContextProvider } from './contexts/AddressContext';
import { Router } from './Router';

export const App = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
		   <GlobalStyles />
		   
		   <BrowserRouter>
		      <ProductsContextProvider>
		         <AddressContextProvider>
		            <Router />
		         </AddressContextProvider>
		      </ProductsContextProvider>
		   </BrowserRouter>
		</ThemeProvider>
	);
};