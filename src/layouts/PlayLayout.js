import { useState, useEffect } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';

const PlayLayout = () => {
    const location = useLocation();
    const isBaseRoute = location.pathname === '/play';

    useEffect(() => {
        setOptionSelected(!isBaseRoute);
    }, [isBaseRoute]);

    const [optionSelected, setOptionSelected] = useState(!isBaseRoute);

    return (
        <div className='play-page play-layout layout'>
            {!optionSelected ? (
                <nav className='play-menu submenu'>
                    <NavLink to='intro' className='nav-link'>
                        <div className='submenu-option'>
                            <h3 className='submenu-option-heading'>HOW TO PLAY</h3>
                            <p className='submenu-option-text'>Lorem ipsum...</p>
                        </div>
                    </NavLink>
                    <NavLink to='create' className='nav-link'>
                        <div className='submenu-option'>
                            <h3 className='submenu-option-heading'>CREATE A GAME</h3>
                            <p className='submenu-option-text'>Lorem ipsum...</p>
                        </div>
                    </NavLink>
                    <NavLink to='browse' className='nav-link'>
                        <div className='submenu-option'>
                            <h3 className='submenu-option-heading'>BROWSE GAMES</h3>
                            <p className='submenu-option-text'>Lorem ipsum...</p>
                        </div>
                    </NavLink>
                </nav>
            ) : <Outlet />}

            {optionSelected &&
                <button className='back-button'>
                    <NavLink to='/play' className='nav-link'>
                        BACK TO PLAY
                    </NavLink>
                </button>
            }
        </div>
    );
};

export default PlayLayout;