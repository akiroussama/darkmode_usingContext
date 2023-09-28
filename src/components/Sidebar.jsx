import React from 'react';
import { ThemeContext } from '../context/ThemeContext';
function Sidebar() {

     const theme = React.useContext(ThemeContext);

    return (
        <div className={`sidebar ${theme}`}>
            <h3>Sidebar</h3>
            <p>Item 1</p>
            <p>Item 2</p>
            <p>Item 3</p>
        </div>
    );
}

export default Sidebar;
