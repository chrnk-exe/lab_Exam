import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import MainRoutes from './components/MainRoutes';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './styles/theme';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './i18next';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
	<Provider store={store}>
		<Router>
			<ThemeProvider theme={theme}>
				<MainRoutes />
			</ThemeProvider>
		</Router>
	</Provider>
);
