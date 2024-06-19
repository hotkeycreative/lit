import { Outlet } from 'react-router-dom';

const ReadLayout = () => {
    return (
        <div className='read-page read-layout layout'>
            <h2 className='section-heading'>READ</h2>
            <Outlet />
        </div>
    );
};

export default ReadLayout;