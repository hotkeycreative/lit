import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className='menu'>
            <NavLink 
                to='/' 
                className={({ isActive }) => 
                    isActive ? 'nav-link active' : 'nav-link'
                }
            >
                Home
            </NavLink>
            <NavLink
                to='/play' 
                className={({ isActive }) => 
                    isActive ? 'nav-link active' : 'nav-link'
                }
            >
                Play
            </NavLink>
            <NavLink
                to='/read' 
                className={({ isActive }) => 
                    isActive ? 'nav-link active' : 'nav-link'
                }
            >
                Read
            </NavLink>
            <NavLink
                to='/write'
                className={({ isActive }) => 
                    isActive ? 'nav-link active' : 'nav-link'
                }
            >
                Write
            </NavLink>
        </nav>
    );
};

export default Menu;