import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function BoutonTheme() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <button onClick={() => setTheme(theme === 'clair' ? 'sombre' : 'clair')}>
            Changer à {theme === 'clair' ? 'sombre' : 'clair'}
        </button>
    );
}

export default BoutonTheme;
