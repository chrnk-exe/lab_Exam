import React from 'react';
import { Box } from '@mui/material';

function App() {


	return (
		<Box
			display="grid"
			gridTemplateColumns="2fr 1fr"
			sx={{ width: '100%', boxSizing: 'border-box' }}>
			Информация про экзамен
		</Box>
	);
}

export default App;
