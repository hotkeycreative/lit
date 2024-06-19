import { NavLink } from 'react-router-dom';

const PlayIntro = () => {
    return (
        <div className='play-intro-page page'>
            <div className='play-intro-content page-content page-column'>
                <h2 className='play-intro-heading page-heading'>HOW TO PLAY</h2>
                <p className='play-intro-text page-text'>Lorem ipsum ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl.</p>

                <div className='page-nav-buttons'>
                    <button className='nav-button'>
                        <NavLink to='/play/create' className='nav-link'>
                            CREATE A GAME
                        </NavLink>
                    </button>
                    <button className='nav-button'>
                        <NavLink to='/play/browse' className='nav-link'>
                            BROWSE GAMES
                        </NavLink>
                    </button>
                </div>
            </div>
            <div className='play-intro-image page-column'>
                <p>Image placeholder...</p>
            </div>
        </div>
    );
};

export default PlayIntro;