import React from 'react';
// styles
import './static/css/global.css';

//components
import { Calendar } from './components/Calendar/Calendar';

export const App: React.FC = () => {
	
	const [selectedDate, selectDate] = React.useState(new Date());

	return (
		<div className='app__container'><Calendar selectDate={selectDate} selectedDate={selectedDate} /></div>
	)
}

export default App;