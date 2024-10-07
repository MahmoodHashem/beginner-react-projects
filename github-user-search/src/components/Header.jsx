
import moon from '../assets/icons/icon-moon.svg'
import sun from '../assets/icons/icon-sun.svg'
import { useState, useEffect } from 'react';
export default function Header() {

    const [isDarkMode, setIsDarkMode] = useState(true);


    useEffect(() => {
        const htmlTag = document.documentElement; 
        if (isDarkMode) {
            htmlTag.classList.add('dark');
            htmlTag.classList.remove('light');
        } else {
            htmlTag.classList.add('light');
            htmlTag.classList.remove('dark');
        }
    }, [isDarkMode]); 


    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };


    return (
        <>
            <div className="header">
                <h1>devfinder</h1>
                <div className="mode-toggler" onClick={toggleTheme}>
                    <h6>{isDarkMode ? "Light" : "Dark"}</h6>
                    <img
                        src={isDarkMode ? sun : moon}
                        alt="moon"
                        className="toggle"
                    />
                </div>
            </div>
        </>
    )
}