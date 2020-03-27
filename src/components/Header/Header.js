import React from 'react';

import './Header.css';

import Home from '../../pages/Home/Home.js';
import AddPaper from '../../pages/AddPaper/AddPaper.js';
import ViewPapers from '../../pages/ViewPapers/ViewPapers.js';

function Header(props) {
    
    return (
        <div className="Header">
            <nav className="navigation">
                <div className="div-link" onClick={()=>{props.setBody(<Home />)}}>Home</div>
                <div className="div-link" onClick={()=>{props.setBody(<AddPaper />)}}>Add Paper</div>
                <div className="div-link" onClick={()=>{props.setBody(<ViewPapers />)}}>View Papers</div>
            </nav>
        </div>
    );
}

export default Header;