import React, { useState } from 'react';
import './App.css';

import Header from './components/Header/Header.js';
import Home from './pages/Home/Home.js';

function App() {
    const [bodyComponent, setBody] = useState(<Home />);

    return (
        <div className="App">
            <Header setBody={(comp)=>{setBody(comp)}} />
            {bodyComponent}
        </div>
    );
}

export default App;
