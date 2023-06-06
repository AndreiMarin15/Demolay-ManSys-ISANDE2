
import "./App.css";
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Yana from './pages/Yana';
function App() {
	return (
		<div className="App">
			<Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="yana" element = {<Yana/>} />
      </Routes>
		</div>
	);
}

export default App;
