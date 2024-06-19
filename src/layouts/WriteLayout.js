import { Outlet } from 'react-router-dom';

const WriteLayout = () => {
    return (
        <div className='write-page write-layout layout'>
            <h2 className='section-heading'>WRITE</h2>
            <Outlet />
        </div>
    );
};

export default WriteLayout;