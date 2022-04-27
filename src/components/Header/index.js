import { CgDarkMode } from 'react-icons/cg';
import './styles.scss'
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';


export function Header(){

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.documentElement.setAttribute('data-theme', localStorage.getItem('theme', theme));
        setTheme(localStorage.getItem('theme', theme))
        
    }, [theme]);

    function swichTheme() {
        if(theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
        localStorage.setItem('theme', theme)
        document.documentElement.setAttribute('data-theme', theme);
    }




    return (
        <header>
            <div className="logo">
                <Link to="/">Countries App</Link>
            </div>

            <button 
                className="theme-mode"
                onClick={swichTheme}
            >
                <CgDarkMode />
            </button>
        </header>
    )
}